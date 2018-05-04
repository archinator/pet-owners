import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Owner } from '../../models/owner.model';
import { NetworkError } from '../../models/error.model';

@Component({
  selector: 'owners-list',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  constructor() { }
  @Input() owners: Owner[]
  @Input() error: NetworkError
  @Output() onSignOut = new EventEmitter<any>()
  @Output() onDetails = new EventEmitter<string>()

  ngOnInit() {
    
  }
 
  logout() {
    this.onSignOut.emit();
  }

  details(_id){
    this.onDetails.emit(_id)
  }

}
