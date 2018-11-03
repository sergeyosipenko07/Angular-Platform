import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import usernameValidator from '../Validators/usernameValidator';
import toUpperCase from '../shared/toUpperCase';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {

  public formValues = {
    name: '',
  };
  public forgotForm: FormGroup;
  public validForm = false;
  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.forgotForm = new FormGroup({
      name: new FormControl(null, Validators.required, usernameValidator)
    });
  }
  submitForm() {
    this.validForm = this.forgotForm.valid;

    if (this.validForm) {
      this.formValues.name = toUpperCase(this.forgotForm.value.name);
      this.authService.rememberPassword(this.formValues.name)
        .subscribe((user: User) => {
          if (user) {
            alert(user.password);
          }
        });
    }
  }
}
