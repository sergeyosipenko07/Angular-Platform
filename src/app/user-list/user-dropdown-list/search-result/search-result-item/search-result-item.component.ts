import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { User } from '../../../user-service.interface';


@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {
  @Input() user: User;
  @Input() Dropdown = true;
  @Output() onSelectedUser: EventEmitter<User> = new EventEmitter<User>();
  @Output() DropdownChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  selectUser() {
    this.onSelectedUser.emit(this.user);
    this.DropdownChange.emit(!this.Dropdown);
  }
  ngOnInit() {
    this.user.dateOfBirth = moment(this.user.dateOfBirth).format('DD MMMM YYYY');
    this.user.dateOfLogin = moment(this.user.dateOfLogin).format('DD MMMM YYYY');
    this.user.dateOfNotification = moment(this.user.dateOfNotification).format('DD MMMM YYYY');
  }
}
