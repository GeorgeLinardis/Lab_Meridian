import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { type Request } from 'express';
import { COOKIE_ACCESS_TOKEN_NAME } from '../constants';
import { type JwtPayloadUser } from '../types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req: Request) =>
        (req?.cookies as Record<string, string>)?.[COOKIE_ACCESS_TOKEN_NAME] ||
        null,
      ignoreExpiration: false,
      // TODO check we are using the expedient option of supplying a symmetric secret for signing the token. Other options, such as a PEM-encoded public key, may be more appropriate for production apps (see here for more information). In any case, as cautioned earlier, do not expose this secret publicly.
      secretOrKey: process.env.JWT_SECRET as string,
    });
  }

  validate(payload: { sub: string; email: string }): JwtPayloadUser {
    return { id: payload.sub, email: payload.email };
  }
}
