import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user-service.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.components.scss']
})

export class SearchResultComponent implements OnInit {
  @Input() users: User;
  @Output() onSelectedUser: EventEmitter<User> = new EventEmitter<User>();
  constructor() {}

  ngOnInit() {
  }

  selectedUser(user: User) {
    this.onSelectedUser.emit(user);
  }
}
