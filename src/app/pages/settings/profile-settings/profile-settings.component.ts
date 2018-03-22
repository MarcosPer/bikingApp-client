import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

  user: any;
  display_name: String;
  profileForm: FormGroup;

  bioMax = 500;
  constructor(private userService: UserService, private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.minLength(2), Validators.maxLength(20)],
      lastName:  ['', Validators.required, Validators.minLength(2), Validators.maxLength(20)],
      bio :  ['', Validators.maxLength(this.bioMax)],
      city: ['', Validators.maxLength(20)],
    });
    this.profileForm.valueChanges.subscribe(form => {
      this.display_name = form.firstName + ' ' + form.lastName.substr(0, 1).toUpperCase();
    });
    this.userService.getCurrentUserData().then(data => {
      this.user = data;

      this.profileForm.setValue({
        firstName: this.user.name.first,
        lastName: this.user.name.last,
        bio: this.user.profile.bio || '',
        city: this.user.profile.city || ''
      });
    });



  }

  onChanges() {


  }

}
