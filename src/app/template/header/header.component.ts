import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() margin: Boolean = true;
  navStyle: any;
  constructor(private router: Router, private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    if (this.margin) {
      this.navStyle = {'margin-bottom' : '40px'};
    }

    // http://biking-server.herokuapp.com/user/me
    this.http.get('http://biking-server.herokuapp.com/user/me').subscribe(data => console.log(data));
  }

  logOut() {
    this.authService.logOut();

    this.router.navigate(['/']);

    // Event emitter logOut
  }
}
