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

  @Input() isDropdownHidden = true;
  @Output() isDropdownHiddenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() onSelectedUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private userListService: UserListService
  ) {
  }

  ngOnInit() {
  }

  closeDropdown() {
    this.isDropdownHiddenChange.emit(!this.isDropdownHidden);
  }

  getUsers() {
    if (!this.isDropdownHidden) {
      this.userListService.getUsers()
        .subscribe((users: User[]) => {
          this.users = users;
          console.log(this.users);
        });
    }
  }
}
