import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';

import {UsersService} from '../shared/services/users.service';
import {AuthService} from '../shared/services/auth.service';
import usernameValidator from '../Validators/usernameValidator';
import toUpperCase from '../shared/toUpperCase';
import {SessionState} from '../redux/reducers';
import {User, UserRequirements} from '../user-list/user-service.interface';
import {LoginUser} from '../redux/actions/user.actions';


export enum STATUS {
  UNAUTHORIZED = 401,
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  private isLoading: boolean;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private http: HttpClient,
    private userService: UsersService,
    private authService: AuthService,
    private sessionStore: Store<SessionState>
  ) {
  }

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
    const form = this.loginForm.value;
    if (form.name && form.password) {
/*
      this.isLoading = true;
*/
      const userCredentials: UserRequirements = {
        name: toUpperCase(form.name),
        password: form.password
      };
      this.sessionStore.dispatch(new LoginUser(userCredentials));
    }
  }
}
