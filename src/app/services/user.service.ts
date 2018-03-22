import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { CacheService } from './cache.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private api: ApiService, private cacheService: CacheService) { }

  getCurrentUserData() {
    return this.http.get(this.api.getUrl('user/me?full')).toPromise().then((userData: any) => {
      // Update user cache
      this.cacheService.updateUserCache({
        display_name: userData.display_name,
        email: userData.email.address,
        avatar: userData.avatar,
        user_id: userData.user_id
      });
      return Promise.resolve(userData);
    });
  }
}
