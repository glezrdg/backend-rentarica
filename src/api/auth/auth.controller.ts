import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// Service
import { AuthService } from './auth.service';

// DTO
import { CreateAuthDto } from './dto/create-auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() createAuthDto: { email: string, password: string }) {
    try {
      return await this.authService.login(createAuthDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  @Post('register')
  async register(@Body() createAuthDto: CreateAuthDto) {
    try {
      return await this.authService.register(createAuthDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
