import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuth()) {
      console.log(route.url);
      this.router.navigate([ '/login', { redirect: true, origin: '//test.com' }]); // TODO: Add origin detector
      return false;
    } else {
      return true;
    }
  }
}
