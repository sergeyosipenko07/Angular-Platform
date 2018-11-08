import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user-service.interface';

@Injectable()
export class UserListService {
  urlApi = 'http://localhost:8000';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<User[]>(`${this.urlApi}/users`);
  }

  getUsersByName(name) {
    return this.http.post(`${this.urlApi}/users-search`, {name});
  }
}
