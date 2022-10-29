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
  register(@Body() authCreateDto: AuthCreateDto): Promise<void> {
    return this.authService.register(authCreateDto);
  }

  @Post('/login')
  login(
    @Body() authCreateDto: AuthCreateDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.login(authCreateDto);
  }

  @Get('/mytasks')
  @UseGuards(AuthGuard())
  mytasks(@GetUser() user: User) {
    return this.authService.mytasks(user.id);
  }
}
