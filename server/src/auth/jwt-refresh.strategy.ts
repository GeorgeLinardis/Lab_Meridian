import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import type { Request } from 'express';
import { COOKIE_REFRESH_TOKEN_NAME } from '../constants';
import { type JwtPayloadUser } from '../types';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: (req: Request) =>
        (req?.cookies as Record<string, string>)?.[COOKIE_REFRESH_TOKEN_NAME] ||
        null,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_REFRESH_SECRET as string,
    });
  }

  validate(payload: { sub: string; email: string }): JwtPayloadUser {
    return { id: payload.sub, email: payload.email };
  }
}
