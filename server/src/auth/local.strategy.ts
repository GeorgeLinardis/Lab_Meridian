import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { type UserModel } from '../generated/prisma/models/User';
import { AuthService } from './auth.service';

type UserWithoutPassword = Omit<UserModel, 'password'>;

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    /**
     * Configures passport-local to read the `email` field from the request body
     * instead of the default `username` field.
     * @see https://github.com/jaredhanson/passport-local/blob/master/README.md#available-options
     */
    super({ usernameField: 'email' });
  }

  /**
   * Called automatically by Passport when the `LocalAuthGuard` is used on a route.
   * Passport extracts `email` and `password` from the request body and passes them here.
   * If valid, the returned user (without password) is attached to `req.user`.
   */
  async validate(
    email: string,
    password: string,
  ): Promise<UserWithoutPassword> {
    const user = await this.authService.validateUser({ email, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
