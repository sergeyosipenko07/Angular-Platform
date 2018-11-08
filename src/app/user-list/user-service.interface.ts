import {UserListService} from './user-list.service';

export interface User {
  id?: string;
  name?: string;
  password?: string;
  age?: string;
  dateOfBirth?: string;
  dateOfLogin?: string;
  dateOfNotification?: string;
  information?: string;
}

export interface UserServiceInterface {
  userListService: UserListService;

  getUsers(): User[];

  getUsersByName(name: string): User[];
}
