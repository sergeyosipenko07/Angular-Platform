import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));

  constructor(
    private router: Router,
    private authService: AuthService,
    private translate: TranslateService
  ) {}

  switchLanguage(event) {
    this.translate.use(event.target.value);
  }
  ngOnInit() {
  }

  getUserFromStorage() {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  logout() {
    this.authService.logout();
  }
}

