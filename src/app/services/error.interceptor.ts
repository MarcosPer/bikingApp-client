import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/do';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  showErrors = ['e5301'];
  interalErrors = /(e8[0-9])\w+/g;

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    return next.handle(req).do(
      event => {
        /*if (event instanceof HttpResponse) {
          //console.log(event.body);
        }*/
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (this.showErrors.indexOf(err.error.error) !== -1 || this.interalErrors.test(err.error.error)) {
            this.router.navigateByUrl('/error?error=' + err.error.error + '&msg=' + err.error.msg);
          }
        }
      }
    );
  }
}
