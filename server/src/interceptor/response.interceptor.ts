import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

// Wraps every successful response in a consistent { data: ... } envelope
export default class ResponseInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<{ data: unknown }> {
    // next.handle() returns an Observable of whatever the route handler returned
    // map() transforms that value before it's sent to the client
    return next.handle().pipe(map((data: unknown) => ({ data })));
  }
}
