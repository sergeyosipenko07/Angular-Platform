import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { UsersService } from '../shared/services/users.service';
import { AuthService } from '../shared/services/auth.service';
import usernameValidator from '../Validators/usernameValidator';
import toUpperCase from '../shared/toUpperCase';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public formValues = {
    name: '',
    password: ''
  };
  public loginForm: FormGroup;
  public validForm = false;
  private isLoading: boolean;
  constructor(
    private translate: TranslateService,
    private router: Router,
    private http: HttpClient,
    private userService: UsersService,
    private authService: AuthService,
  ) {}
  switchLanguage(event) {
    this.translate.use(event.target.value);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl(null, Validators.required, usernameValidator),
      password: new FormControl(null, [Validators.required])
    });
  }

  submitForm() {
    this.validForm = this.loginForm.valid;
    if (this.validForm) {
      this.isLoading = true;
      this.formValues.name = toUpperCase(this.loginForm.value.name);
      this.formValues.password = this.loginForm.value.password;
      this.authService.login(this.formValues)
        .subscribe((user) => {
          if (user) {
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/info']);
          } else {
            alert('Incorrect Name or Password. Please press F5 button and refresh the page.');
          }
        });
    }
  }
}
