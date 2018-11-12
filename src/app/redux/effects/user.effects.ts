import { Injectable } from '@angular/core';
import { Actions,  Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';
import {UsersService} from '../../shared/services/users.service';
import {Router} from '@angular/router';
import {
  UsersActions,
  LOGIN_USER,
  LoginUser,
  LoginUserSuccess,
  LoginUserFail,
  LOAD_USERS,
  LoadUsersSuccess,
  LoadUsersFail,
  LoadUsers,
  LOAD_CURRENT_USER,
  LoadCurrentUserSuccess,
  LoadCurrentUserFail,
  LogoutUserSuccess,
  LogoutUserFail,
  LOGOUT_USER,
  LoadCurrentUser,
  UPDATE_CURRENT_USER,
  UpdateCurrentUser,
  UpdateCurrentUserSuccess,
  UpdateCurrentUserFail,
  CREATE_USER,
  CreateUser,
  CreateUserSuccess,
  CreateUserFail,
  UPDATE_USER,
  UpdateUserSuccess,
  UpdateUserFail,
  DELETE_USER,
  DeleteUser,
  DeleteUserSuccess,
  DeleteUserFail
} from '../actions/user.actions';
import {User, UserRequirements} from '../../user-list/user-service.interface';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {STATUS} from '../../login-form/login-form.component';


@Injectable()

export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UsersService,
    private router: Router
  ) {}

  @Effect()
  loginUser$: Observable<UsersActions> = this.actions$.pipe(
    ofType(LOGIN_USER),
    mergeMap((action: LoginUser) => this.authService.login(action.payload as UserRequirements).pipe(
      map((user: User) => new LoginUserSuccess(user)),
      catchError((error: HttpErrorResponse) => of(
        new LoginUserFail(error.status === STATUS.UNAUTHORIZED ? STATUS.UNAUTHORIZED : error.message))
      )
      )
    )
  );
}

