import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserListService} from '../user-list.service';
import {SearchFieldComponent} from './search-field/search-field.component';
import {User} from '../user-service.interface';

@Component({
  selector: 'app-user-dropdown-list',
  templateUrl: './user-dropdown-list.component.html',
  styleUrls: ['./user-dropdown-list.component.scss']
})
export class UserDropdownListComponent implements OnInit {
  @Input() users: User[];
  @Input() selectedUser: User;
  @Input() Dropdown = true;
  @Output() selectedUserChange: EventEmitter<User> = new EventEmitter<User>();
  @Output() DropdownChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(SearchFieldComponent)
  searchFieldComponent = SearchFieldComponent;
  constructor(
    private userListService: UserListService
  ) {}

  ngOnInit() {
  }

  searchOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
      event.preventDefault();
    }
  }

  search() {
    this.userListService.getUsersByName(this.searchFieldComponent.name)
      .subscribe((users: User[]) => {
        if (users.length === 0) {
          alert('User not found!');
        }
        this.users = users;
      });
  }

  onSelectUser(user: User) {
    this.selectedUserChange.emit(user);
    this.DropdownChange.emit(this.Dropdown);
  }
}
