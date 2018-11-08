import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserChosenComponent } from './user-chosen/user-chosen.component';
import { BadgeComponent } from './badge/badge.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserDropdownListComponent } from './user-dropdown-list/user-dropdown-list.component';
import { SearchFieldComponent } from './user-dropdown-list/search-field/search-field.component';
import { SearchBtnComponent } from './user-dropdown-list/search-btn/search-btn.component';
import { SearchResultComponent } from './user-dropdown-list/search-result/search-result.component';
import { SearchResultItemComponent } from './user-dropdown-list/search-result/search-result-item/search-result-item.component';
import { UserListService } from './user-list.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    UserListComponent,
    UserChosenComponent,
    BadgeComponent,
    UserDropdownListComponent,
    SearchFieldComponent,
    SearchBtnComponent,
    SearchResultComponent,
    SearchResultItemComponent,
  ],
  providers: [
    UserListService
  ],
  exports: [UserListComponent]
})

export class UserListModule {
}
