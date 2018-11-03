import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

@Injectable()
export class AuthService {
  urlApi = 'http://localhost:8000';
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(userLogin): Observable<{}> {
    const {name, password} = userLogin;
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
