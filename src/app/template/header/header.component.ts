import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CacheService } from '../../services/cache.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() margin: Boolean = true;
  navStyle: any;
  userName: String;
  userAvatar: String;

  constructor(private router: Router, private authService: AuthService, private cacheService: CacheService) { }

  ngOnInit() {
    if (this.margin) {
      this.navStyle = {'margin-bottom' : '40px'};
    }

    // http://biking-server.herokuapp.com/user/me
    this.cacheService.getUserCache().then(data => {
      this.userName = data.name;
      this.userAvatar = data.avatar;
    });
  }

  logOut() {
    this.authService.logOut();

    this.router.navigate(['/']);

    // Event emitter logOut
  }
}
