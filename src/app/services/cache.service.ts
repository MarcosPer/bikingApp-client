import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable()
export class CacheService {

  constructor(private http: HttpClient, private api: ApiService) { }

  getUserCache() {
    return new Promise((res, rej) => {
      const user = localStorage.getItem('user');
      if (user == null) {
        // If haven't cache, ask to server
        this.http.get(this.api.getUrl('user/me')).toPromise().then((data: any) => {
          localStorage.setItem('user', JSON.stringify({
            name: data.display_name,
            email: data.email.address,
            avatar: data.avatar,
            user_id: data.user_id
          }));
          res();
        });
      } else {
        // If have, continue
        res();
      }
    }).then(() => {
      try {
        return Promise.resolve(JSON.parse(localStorage.getItem('user')));
      } catch (error) {
        throw new Error('Invalid json on localStorage');
      }
    });
  }
}
