import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/do';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  invalidLoginErrors = ['e4012', 'e4013', 'e4014', 'e4015'];

  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const login = this.authService.getLogin();

    if (login !== null) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'bearer ' + login.token)
      });
    }

    return next.handle(req).do(
      event => {
        /*if (event instanceof HttpResponse) {

          //console.log(event.body);
        }*/
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (this.invalidLoginErrors.indexOf(err.error.error) !== -1) {
            // We have invalid token. Login again
            this.authService.logOut();
            this.router.navigateByUrl('/login?errorUnlogged=true');
          }
        }
      }
    );
  }
}
