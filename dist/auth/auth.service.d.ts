import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { AuthCreateDto } from './dto/auth-create.dto';
import { User } from './user.entity';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    register(authCreateDto: AuthCreateDto): Promise<void>;
    login(authCreateDto: AuthCreateDto): Promise<{
        accessToken: string;
    }>;
    mytasks(id: number): Promise<User>;
}
