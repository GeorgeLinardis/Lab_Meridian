import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { type Response } from 'express';
import { AuthService } from './auth.service';
import { JwtRefreshGuard, LocalAuthGuard } from './guards/auth.guards';
import { type AuthenticatedRequest } from '../types';
import {
  COOKIE_ACCESS_TOKEN_NAME,
  COOKIE_REFRESH_TOKEN_NAME,
} from '../constants';

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
};

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    const { access_token, refresh_token } = this.authService.login(req.user);
    res.cookie(COOKIE_ACCESS_TOKEN_NAME, access_token, {
      ...COOKIE_OPTIONS,
    });
    res.cookie(COOKIE_REFRESH_TOKEN_NAME, refresh_token, {
      ...COOKIE_OPTIONS,
    });
    res.send();
  }

  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie(COOKIE_ACCESS_TOKEN_NAME);
    res.clearCookie(COOKIE_REFRESH_TOKEN_NAME);
    res.send();
  }

  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  refresh(@Req() req: AuthenticatedRequest, @Res() res: Response) {
    const { access_token, refresh_token } = this.authService.login(req.user);
    res.cookie(COOKIE_ACCESS_TOKEN_NAME, access_token, {
      ...COOKIE_OPTIONS,
    });
    res.cookie(COOKIE_REFRESH_TOKEN_NAME, refresh_token, {
      ...COOKIE_OPTIONS,
    });
    res.send();
  }
}
