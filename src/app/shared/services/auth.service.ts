import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {User, UserRequirements} from '../../user-list/user-service.interface';

@Injectable()
export class AuthService {
  urlApi = 'http://localhost:8000';
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(userRequirements: UserRequirements): Observable<{}> {
    const {name, password} = userRequirements;
    console.log(userRequirements);
    return this.http.post<{}>(`${this.urlApi}/login`, {
      name,
      password
    });
  }

  rememberPassword(name: string): Observable<User> {
    return this.http.post<User>(`${this.urlApi}/password`, {
      name
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
