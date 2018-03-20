import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  isExpired() {
    const login = this.getLogin();
    if (login === null || Date.now() > login.expiration) {
      return true;
    }
    return false;
  }

  willExpire() {
    // Check if will expire in next 24 hours
    const expireHours = 24;

    const login = this.getLogin();
    if (login === null || (Date.now() + expireHours * 3600 ) > login.expiration) {
      return true;
    }
    return false;
  }

  isAuth() {
    if (this.getLogin() === null) {
      return false;
    }
    return true;
  }

  saveToken(token: string, expiration: number) {
    localStorage.setItem(
      'login',
      JSON.stringify({ token: token, expiration: expiration })
    );
  }

  logOut() {
    localStorage.clear();
  }

  getLogin() {
    try {
      return JSON.parse(localStorage.getItem('login'));
    } catch (error) {
      return null;
    }
  }
}
