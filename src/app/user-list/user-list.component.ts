import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from './user-service.interface';
import {UserListService} from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  public currentUser: User;

  @Input() Dropdown = true;
  @Output() DropdownChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onSelectedUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private userListService: UserListService
  ) {
  }

  ngOnInit() {
  }

  closeDropdown() {
    this.DropdownChange.emit(this.Dropdown);
  }

  getUsers() {
    if (!this.Dropdown) {
      this.userListService.getUsers()
        .subscribe((users: User[]) => {
          this.users = users;
        });
    }
  }
}
