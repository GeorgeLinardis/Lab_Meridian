import { type Request } from 'express';
import { type UserModel } from './generated/prisma/models/User';

export type JwtPayloadUser = Pick<UserModel, 'id' | 'email'>;

export type AuthenticatedRequest = Request & {
  user: JwtPayloadUser;
};
