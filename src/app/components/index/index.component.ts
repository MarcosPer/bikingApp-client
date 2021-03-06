import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  login: Boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.login = this.authService.isAuth();
  }

}
