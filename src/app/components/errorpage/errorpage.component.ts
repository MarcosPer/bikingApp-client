import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {
  msgError: Boolean = true;
  errorTitle: String;
  errorContent: String;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.error !== undefined) {
        this.errorTitle = 'Error ' + params.error;
      } else {
        this.errorTitle = 'Undefined error';
      }
      if (params.msg !== undefined) {
        this.errorContent = params.msg;
      } else {
        this.errorContent = 'Undefined error';
      }
    });
  }
}
