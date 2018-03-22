import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  subpage: String = '';
  constructor(private activatedRoute: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(v => {
      if (v['page'] === undefined ) {
        this.loadSettings('profile');
      } else {
        this.loadSettings(v['page']);
      }
    });
  }

  loadSettings(page) {
    this.subpage = page;
    this.location.replaceState('settings/' + page);
  }
}
