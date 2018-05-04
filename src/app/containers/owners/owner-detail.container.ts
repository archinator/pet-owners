import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as OwnersActions from '../../store/actions/owners.action';
import * as fromRoot from '../../store/reducers/index'
import * as ownersSelectors from '../../store/selectors/owners.selector'
import { Owner } from '../../models/owner.model'
import { NetworkError } from '../../models/error.model'

@Component({
  selector: 'app-owners-page',
  template: `<owner-detail [owner]="owner | async" [error]="networkError | async" (onDetails)="onDetails($event)"></owner-detail>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerDetailContainer implements OnInit {

  id: string;
  owner: Observable<Owner>;
  networkError: Observable<NetworkError>; 
  constructor(    
    private router: ActivatedRoute,
    private store: Store<fromRoot.State>) { 
      this.owner = store.select(ownersSelectors.selectOwner);
      this.networkError = store.select(ownersSelectors.selectError);
      this.router.params.subscribe(params => {
      this.id = params.id
    });
    }
  
  ngOnInit() {
    this.store.dispatch(new OwnersActions.GetOwner(this.id));    
  }  
  
}
