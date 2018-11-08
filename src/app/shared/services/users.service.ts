import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  urlApi = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  updateUser(user): Observable<{}> {
    const {id, name, password, age, dateOfBirth, dateOfLogin, dateOfNotification, information} = user;
    return this.http.put<{}>(`${this.urlApi}/users/${user.id}`, {
      id,
      name,
      password,
      age,
      dateOfBirth,
      dateOfLogin,
      dateOfNotification,
      information
    });
  }
}
