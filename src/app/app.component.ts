import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    private store: Store<{}>,
    private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  check = 0;

  checkLogin() {
    if (localStorage.getItem('user')) {
      return this.check = 1;
    }
  }
}
