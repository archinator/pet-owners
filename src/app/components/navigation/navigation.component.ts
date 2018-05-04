import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() isAuthenticated: boolean;
  @Output() onSignOut = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  signout() {
    this.onSignOut.emit();
  }

}
