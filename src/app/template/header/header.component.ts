import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() margin: Boolean = true;
  navStyle: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.margin) {
      this.navStyle = {'margin-bottom' : '40px'};
    }
  }

  logOut() {
    this.authService.logOut();

    this.router.navigate(['/']);

    // Event emitter logOut
  }
}
