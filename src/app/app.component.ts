import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import usernameValidator from './Validators/usernameValidator';
import ageValidator from './Validators/ageValidator';
import dateOfBirthValidator from './Validators/dateOfBirthValidator';
import dateOfLoginValidator from './Validators/dateOfLoginValidator';
import dateOfNotificationValidator from './Validators/dateOfNotificationValidator';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public formValues = {
    name: '',
    age: '',
    dateOfBirth: '',
    dateOfLogin: '',
    dateOfNotification: ''
  };
  public regForm: FormGroup;
  public validForm = false;
  constructor() {}

  ngOnInit() {
    this.regForm = new FormGroup({
      name: new FormControl(null, Validators.required, usernameValidator),
      age: new FormControl(null, [Validators.required, ageValidator]),
      dateOfBirth: new FormControl(null, [Validators.required, dateOfBirthValidator]),
      dateOfLogin: new FormControl(null, [Validators.required, dateOfLoginValidator]),
      dateOfNotification: new FormControl(null, [Validators.required, dateOfNotificationValidator])
    });
  }
  submitForm() {
    this.validForm = this.regForm.valid;

    if (this.validForm) {
      this.formValues.name = this.regForm.value.name;
      this.formValues.age = this.regForm.value.age;
      this.formValues.dateOfBirth = moment(this.regForm.value.dateOfBirth).format('DD MMMM YYYY');
      this.formValues.dateOfLogin = moment(this.regForm.value.dateOfLogin).format('DD MMMM YYYY');
      this.formValues.dateOfNotification = moment(this.regForm.value.dateOfNotification).format('DD MMMM YYYY');
    }
  }
}
