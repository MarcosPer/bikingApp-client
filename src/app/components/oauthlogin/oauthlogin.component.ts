import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-oauthlogin',
  templateUrl: './oauthlogin.component.html',
  styleUrls: ['./oauthlogin.component.css']
})
export class OauthloginComponent implements OnInit {
  parameters: any;
  msgError = false;
  msgContent: string;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.parameters = params;
      if (! Boolean(this.parameters.error)) {
        this.msgContent = 'Redirecting to bikingApp';
        this.authService.saveToken(params.token, params.expire);
        // redirect
      } else {
        this.msgError = true;
        this.msgContent = 'Error in your login: ' + '[' + this.parameters.error_code + '] ' + this.parameters.error_msg;
      }
    });
  }
}
