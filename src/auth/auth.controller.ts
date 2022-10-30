import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCreateDto } from './dto/auth-create.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() authCreateDto: AuthCreateDto): Promise<void> {
    return await this.authService.register(authCreateDto);
  }

  @Post('/login')
  async login(
    @Body() authCreateDto: AuthCreateDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.login(authCreateDto);
  }

  @Get('/mytasks')
  @UseGuards(AuthGuard())
  async mytasks(@GetUser() user: User) {
    return await this.authService.mytasks(user.id);
  }
}
