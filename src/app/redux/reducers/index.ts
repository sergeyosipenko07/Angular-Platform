import { UsersState, userReducer } from './user.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { UsersActions } from '../actions/user.actions';
import { currentUserReducer, CurrentUserState } from './current-user.reducer';

export interface DataState {
  users: UsersState;
}

export interface SessionState {
  currentUser: CurrentUserState;
}

export const dataReducers: ActionReducerMap<DataState, UsersActions> = {
  users: userReducer
};

export const sessionReducers: ActionReducerMap<SessionState, UsersActions> = {
  currentUser: currentUserReducer
};
