import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Model
import { Auth, AuthDocument } from './schemas/auth.schema';

// DTO
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    @InjectModel(Auth.name) private auth: Model<AuthDocument>,
  ) { }

  async login(createAuthDto: CreateAuthDto) {
    try {

      const user = await this.auth.findOne({ email: createAuthDto.email })

      if (!user || user.password !== createAuthDto.password) {
        throw new Error('El email o contraseña esta equivocado')
      }

      let token: any = this.jwt.sign({ _id: user._id });

      return {
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        _id: user._id,
        token,
      };
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message)
    }
  }

  async register(createAuthDto: CreateAuthDto) {
    try {

      const exist = await this.auth.findOne({ email: createAuthDto.email })

      if (exist) {
        throw new Error('El usuario ya tiene una cuenta!')
      }

      let user = await this.auth.create(createAuthDto)

      let token: any = this.jwt.sign({ _id: user._id });

      return {
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        _id: user._id,
        token,
      };
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message)
    }
  }

}
