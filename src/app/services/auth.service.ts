import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  guardCheck() {

    const aux = localStorage.getItem('user_logged');

    if (!this.isAuth()) {
      this.router.navigate(['/login/', {redirect : true, origin : '//test.com'}]);
      return false;
    } else {
      return true;
    }
  }

  isAuth() {
    return localStorage.getItem('user_logged') !== null;
  }

  saveToken(token: string, expiration: number) {
    localStorage.setItem('user_logged', 'logged');
    localStorage.setItem('user_token' , token);
    localStorage.setItem('user_token_exp', expiration.toString());
  }

  logOut() {
    localStorage.removeItem('user_logged');
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_token_exp');
  }

}
