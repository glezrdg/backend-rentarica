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

      const exist = await this.auth.find({ email: createAuthDto.email })


      let token: any = this.jwt.sign({ _id: 'dsd' });

      // return {
      //   name: user.name,
      //   _id: user._id,
      //   isAdmin: true,
      //   token,
      // };
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
}
