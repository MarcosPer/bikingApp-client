import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    getToken(): any {
        return 'putaodkodskjcsxvhhyudsguvcxsjyuxgfcyudsfjidhfyhudsforeputa';
    }
  constructor() { }

  isAuth() {
    if (this.getLogin() === undefined) { return false; }
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
