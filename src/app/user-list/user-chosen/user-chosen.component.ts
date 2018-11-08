import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user-service.interface';

@Component({
  selector: 'app-user-chosen',
  templateUrl: './user-chosen.component.html',
  styleUrls: ['./user-chosen.component.scss']
})
export class UserChosenComponent implements OnInit {
  @Input() currentUser: User;

  constructor() {}

  ngOnInit() {}

}
