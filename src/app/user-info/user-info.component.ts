import { Component, OnInit } from '@angular/core';

import toUpperCase from '../shared/toUpperCase';
import * as moment from 'moment';

interface ForFormValues {
  name: string;
  password: string;
  age: string;
  dateOfBirth: string;
  dateOfLogin: string;
  dateOfNotification: string;
  information: string;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  public formValues: ForFormValues = {
    name: '',
    password: '',
    age: '',
    dateOfBirth: '',
    dateOfLogin: '',
    dateOfNotification: '',
    information: ''
  };
  constructor() {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.formValues.name = toUpperCase(user.name);
    this.formValues.password = user.password;
    this.formValues.age = user.age;
    this.formValues.dateOfBirth = moment(user.dateOfBirth).format('DD MMMM YYYY');
    this.formValues.dateOfLogin = moment(user.dateOfLogin).format('DD MMMM YYYY');
    this.formValues.dateOfNotification = moment(user.dateOfNotification).format('DD MMMM YYYY');
    this.formValues.information = user.information;
    }
}
