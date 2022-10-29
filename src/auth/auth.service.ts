import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { AuthCreateDto } from './dto/auth-create.dto';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(authCreateDto: AuthCreateDto): Promise<void> {
    const user = new User();
    user.username = authCreateDto.username;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(authCreateDto.password, user.salt);
    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(authCreateDto: AuthCreateDto): Promise<{ accessToken: string }> {
    const { username, password } = authCreateDto;
    const user = await this.userRepository.findOneBy({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { username };
      const accessToken: string = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }

  async mytasks(id: number) {
    const im = await this.userRepository.findOneBy({ id });
    delete im.password;
    delete im.salt;
    return im;
  }
}
