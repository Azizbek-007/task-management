import { AuthService } from './auth.service';
import { AuthCreateDto } from './dto/auth-create.dto';
import { User } from './user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(authCreateDto: AuthCreateDto): Promise<void>;
    login(authCreateDto: AuthCreateDto): Promise<{
        accessToken: string;
    }>;
    mytasks(user: User): Promise<User>;
}
