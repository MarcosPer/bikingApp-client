import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  googleUrl: String = 'http://biking-server.herokuapp.com/auth/google?callback=' + window.location.origin + '/login/oauth';
  facebookUrl: String = 'http://biking-server.herokuapp.com/auth/facebook?callback=' + window.location.origin + '/login/oauth';
  error: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        // Show error in login page if redirected
        if (params.errorUnlogged !== undefined) {
          this.error = true;
        }
    });
  }
}
