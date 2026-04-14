import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { type Response } from 'express';

const CODE_MAP = new Map([
  [400, 'BAD_REQUEST'],
  [401, 'UNAUTHORIZED'],
  [403, 'FORBIDDEN'],
  [404, 'NOT_FOUND'],
  [409, 'CONFLICT'],
]);

type ExceptionShape = {
  message: string;
  code: string;
};

// @Catch() with no arguments catches all exceptions — both HttpException and unknown errors.
// NestJS uses this metadata to route exceptions to this filter before executing it.
@Catch()
export default class CustomExceptionFilter implements ExceptionFilter {
  private getExceptionShape(message: string, code?: number): ExceptionShape {
    return {
      message,
      code:
        typeof code === 'number'
          ? (CODE_MAP.get(code) ?? 'UNKNOWN')
          : 'UNKNOWN',
    };
  }
  catch(exception: unknown, host: ArgumentsHost) {
    const res: Response = host.switchToHttp().getResponse();
    if (exception instanceof HttpException) {
      const exceptionShape = this.getExceptionShape(
        exception.message,
        exception.getStatus(),
      );
      res.status(exception.getStatus()).send(exceptionShape);
    } else {
      const exceptionShape = this.getExceptionShape(
        'Unknown exception occurred',
      );
      res.status(500).send(exceptionShape);
    }
  }
}
