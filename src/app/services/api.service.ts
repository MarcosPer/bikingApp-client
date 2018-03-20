import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  apiUrl: String = 'http://localhost:3000';

  constructor() { }

  getRootUrl() {
    return this.apiUrl;
  }

  getUrl(path: String) {
    if (path.startsWith('/')) {
      return this.apiUrl + '' + path;
    } else {
      return this.apiUrl + '/' + path;
    }
  }
}
