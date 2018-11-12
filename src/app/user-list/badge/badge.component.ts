import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() Dropdown = true;
  @Output() DropdownChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
  }

  toggle() {
    this.DropdownChange.emit(!this.Dropdown);
  }

}
