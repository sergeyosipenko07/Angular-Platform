import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import usernameValidator from '../Validators/usernameValidator';
import ageValidator from '../Validators/ageValidator';
import dateOfBirthValidator from '../Validators/dateOfBirthValidator';
import dateOfLoginValidator from '../Validators/dateOfLoginValidator';
import dateOfNotificationValidator from '../Validators/dateOfNotificationValidator';
import toUpperCase from '../shared/toUpperCase';
import {UsersService} from '../shared/services/users.service';
import * as moment from 'moment';


interface ForFormValues {
  id: string;
  name: string;
  password: string;
  age: string;
  dateOfBirth: string;
  dateOfLogin: string;
  dateOfNotification: string;
  information: string;
}

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  public formValues: ForFormValues = {
    id: '',
    name: '',
    password: '',
    age: '',
    dateOfBirth: '',
    dateOfLogin: '',
    dateOfNotification: '',
    information: ''
  };
  public editForm: FormGroup;
  public validForm = false;
  constructor(
    public router: Router,
    public usersService: UsersService
  ) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.editForm = new FormGroup({
      id: new FormControl(user.id),
      name: new FormControl(user.name, Validators.required, usernameValidator),
      password: new FormControl(user.password, Validators.required),
      age: new FormControl(user.age, [Validators.required, ageValidator]),
      dateOfBirth: new FormControl(
        moment(user.dateOfBirth).format('DD MMMM YYYY'), [Validators.required, dateOfBirthValidator]),
      dateOfLogin: new FormControl(
        moment(user.dateOfLogin).format('DD MMMM YYYY'), [Validators.required, dateOfLoginValidator]),
      dateOfNotification: new FormControl(
        moment(user.dateOfNotification).format('DD MMMM YYYY'), [Validators.required, dateOfNotificationValidator]),
      information: new FormControl(user.information, [Validators.required])
    });
  }
  submitForm() {
    this.validForm = this.editForm.valid;

    if (this.validForm) {
      this.formValues.id = this.editForm.value.id;
      this.formValues.name = toUpperCase(this.editForm.value.name);
      this.formValues.password = this.editForm.value.password;
      this.formValues.age = this.editForm.value.age;
      this.formValues.dateOfBirth = moment(this.editForm.value.dateOfBirth).format('DD MMMM YYYY');
      this.formValues.dateOfLogin = moment(this.editForm.value.dateOfLogin).format('DD MMMM YYYY');
      this.formValues.dateOfNotification = moment(this.editForm.value.dateOfNotification).format('DD MMMM YYYY');
      this.formValues.information = this.editForm.value.information;
      this.usersService.updateUser(this.formValues)
        .subscribe((user) => {
          if (user) {
            localStorage.clear();
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/info']);
          } else {
            alert('Error');
          }
        });
    }
  }
}
