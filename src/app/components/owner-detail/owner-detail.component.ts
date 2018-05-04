import { Component, OnInit, Input } from '@angular/core';

import { Owner } from '../../models/owner.model';
import { NetworkError } from '../../models/error.model';

@Component({
  selector: 'owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {

  @Input() owner: Owner
  @Input() error: NetworkError
  constructor() {
      
   }

  ngOnInit() {
        
  }

}
