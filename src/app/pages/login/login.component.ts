import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  googleUrl: String = 'http://biking-server.herokuapp.com/auth/google?callback=' + window.location.origin + '/login/oauth';
  facebookUrl: String = 'http://biking-server.herokuapp.com/auth/facebook?callback=' + window.location.origin + '/login/oauth';

  constructor() {}

  ngOnInit() {}
}
