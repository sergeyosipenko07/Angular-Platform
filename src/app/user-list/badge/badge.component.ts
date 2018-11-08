import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() isDropdownHidden = true;
  @Output() isDropdownHiddenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
  }

  toggle() {
    this.isDropdownHiddenChange.emit(!this.isDropdownHidden);
  }

}
