import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isExpired() {
    const login = this.getLogin();
    if (login === null || Date.now > login.expiration){
      return true;
    }
    return false;
  }
  constructor() { }

  isAuth() {
    if (this.getLogin() === null) { return false; }
    return true;
  }

  saveToken(token: string, expiration: number) {
    localStorage.setItem('login', JSON.stringify({token: token, expiration: expiration}));
  }

  logOut() {
    localStorage.clear();
  }

  getLogin()  {
    try {
      return JSON.parse(localStorage.getItem('login'));
    } catch (error) {
      return null;
    }
  }
}
