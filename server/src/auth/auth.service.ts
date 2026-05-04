import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import {
  COOKIE_ACCESS_TOKEN_NAME,
  COOKIE_REFRESH_TOKEN_NAME,
} from '../constants';
import { type JwtPayloadUser } from '../types';

type Credentials = { email: string; password: string };

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(credentials: Credentials) {
    const { email, password: pass } = credentials;
    const user = await this.userService.findByEmail(email);

    if (!user) {
      return null;
    }

    const isSamePassword = await compare(pass, user.password);
    if (isSamePassword) {
      const { password: _password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid Credentials');
  }

  login(user: JwtPayloadUser): {
    [COOKIE_ACCESS_TOKEN_NAME]: string;
    [COOKIE_REFRESH_TOKEN_NAME]: string;
  } {
    const payload = { email: user.email, sub: user.id };
    return {
      [COOKIE_ACCESS_TOKEN_NAME]: this.jwtService.sign(payload),
      [COOKIE_REFRESH_TOKEN_NAME]: this.jwtService.sign(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      }),
    };
  }
}
