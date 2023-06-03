import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';

// CONSTANTS
import { jwtConstants } from '../../utils/constants';

// Schema
import { Auth, AuthSchema } from './schemas/auth.schema';

// CONTROLLER
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    // PassportModule,
    JwtModule.register({
      secret: jwtConstants,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
