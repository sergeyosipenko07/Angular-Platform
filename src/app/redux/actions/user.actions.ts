import { Action } from '@ngrx/store';
import { User, UserRequirements } from '../../user-list/user-service.interface';

export const LOGIN_USER = '[User] Login User';
export const LOGIN_USER_SUCCESS = '[User] Login User Success';
export const LOGIN_USER_FAIL = '[User] Login User Fail';
export const LOGOUT_USER = '[User] Logout User';
export const LOGOUT_USER_SUCCESS = '[User] Logout User Success';
export const LOGOUT_USER_FAIL = '[User] Logout User Fail';
export const LOAD_USERS = '[User] Load User';
export const LOAD_USERS_SUCCESS = '[User] Load Users Success';
export const LOAD_USERS_FAIL = '[User] Load Users Fail';
export const CREATE_USER = '[User] Create User';
export const CREATE_USER_SUCCESS = '[User] Create User Success';
export const CREATE_USER_FAIL = '[User] Create User Fail';
export const UPDATE_USER = '[User] Update User';
export const UPDATE_USER_SUCCESS = '[User] Update User Success';
export const UPDATE_USER_FAIL = '[User] Update User Fail';
export const DELETE_USER = '[User] Delete User';
export const DELETE_USER_SUCCESS = '[User] Delete User Success';
export const DELETE_USER_FAIL = '[User] Delete User Fail';
export const LOAD_CURRENT_USER = '[User] Load Current User';
export const LOAD_CURRENT_USER_SUCCESS = '[User] Load Current User Success';
export const LOAD_CURRENT_USER_FAIL = '[User] Load Current User Fail';
export const UPDATE_CURRENT_USER = '[User] Update Current User';
export const UPDATE_CURRENT_USER_SUCCESS = '[User] Update Current User Success';
export const UPDATE_CURRENT_USER_FAIL = '[User] Update Current User Fail';


export class LoginUser implements Action {
  readonly type = LOGIN_USER;

  constructor(public payload: UserRequirements) {
  }
}

export class LoginUserSuccess implements Action {
  readonly type = LOGIN_USER_SUCCESS;

  constructor(public payload: User) {
  }
}

export class LoginUserFail implements Action {
  readonly type = LOGIN_USER_FAIL;

  constructor(public payload: string | number) {
  }
}

export class LogoutUser implements Action {
  readonly type = LOGOUT_USER;
}

export class LogoutUserSuccess implements Action {
  readonly type = LOGOUT_USER_SUCCESS;
}

export class LogoutUserFail implements Action {
  readonly type = LOGOUT_USER_FAIL;

  constructor(public payload: string | number) {
  }
}

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;

  constructor(public payload: User[]) {
  }
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public payload: User[]) {
  }
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;

  constructor(public payload: string) {
  }
}

export class CreateUser implements Action {
  readonly type = CREATE_USER;

  constructor(public payload: User) {
  }
}

export class CreateUserSuccess implements Action {
  readonly type = CREATE_USER_SUCCESS;

  constructor(public payload: User) {
  }
}

export class CreateUserFail implements Action {
  readonly type = CREATE_USER_FAIL;

  constructor(public payload: string) {
  }
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;

  constructor(public payload: User) {
  }
}

export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;

  constructor(public payload: User) {
  }
}

export class UpdateUserFail implements Action {
  readonly type = UPDATE_USER_FAIL;

  constructor(public payload: string) {
  }
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;

  constructor(public payload: number | undefined) {
  }
}

export class DeleteUserSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;

  constructor(public payload: User) {
  }
}

export class DeleteUserFail implements Action {
  readonly type = DELETE_USER_FAIL;

  constructor(public payload: string) {
  }
}

export class LoadCurrentUser implements Action {
  readonly type = LOAD_CURRENT_USER;
  constructor(public payload: User) {
  }
}

export class LoadCurrentUserSuccess implements Action {
  readonly type = LOAD_CURRENT_USER_SUCCESS;

  constructor(public payload: User) {
  }
}

export class LoadCurrentUserFail implements Action {
  readonly type = LOAD_CURRENT_USER_FAIL;

  constructor(public payload: string) {
  }
}

export class UpdateCurrentUser implements Action {
  readonly type = UPDATE_CURRENT_USER;

  constructor(public payload: User) {
  }
}

export class UpdateCurrentUserSuccess implements Action {
  readonly type = UPDATE_CURRENT_USER_SUCCESS;

  constructor(public payload: User) {
  }
}

export class UpdateCurrentUserFail implements Action {
  readonly type = UPDATE_CURRENT_USER_FAIL;

  constructor(public payload: string) {
  }
}

export type UsersActions =
  LoginUser | LoginUserSuccess | LoginUserFail |
  LogoutUser | LogoutUserSuccess | LogoutUserFail |
  LoadUsers | LoadUsersSuccess | LoadUsersFail |
  CreateUser | CreateUserSuccess | CreateUserFail |
  UpdateUser | UpdateUserSuccess | UpdateUserFail |
  DeleteUser | DeleteUserSuccess | DeleteUserFail |
  LoadCurrentUser | LoadCurrentUserSuccess | LoadCurrentUserFail |
  UpdateCurrentUser | UpdateCurrentUserSuccess | UpdateCurrentUserFail;
