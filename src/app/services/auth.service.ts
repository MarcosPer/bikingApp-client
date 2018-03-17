import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

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
