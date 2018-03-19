// src/app/auth/token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    // Clone the request to add the new header.
    req = req.clone({headers: req.headers.set('Authorization', 'bearer 548')});
    // Pass on the cloned request instead of the original request.
    return next.handle(req);
  }
}
