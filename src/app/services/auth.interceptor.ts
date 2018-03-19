import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*
    if(this.authService.isExpired()){
      this.router.navigateByUrl('/login');
    }
    */
    const login = this.authService.getLogin();
    
    if (login !== null){
      req = req.clone({headers: req.headers.set('Authorization', 'bearer '+login.token)});
    }
    //TODO : check expiration
    return next.handle(req);
  }
}
