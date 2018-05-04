import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from "@angular/router";
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as OwnersActions from '../../store/actions/owners.action';
import * as AuthActions from '../../store/actions/auth.action';
import * as fromRoot from '../../store/reducers/index'
import * as ownersSelectors from '../../store/selectors/owners.selector'
import { Owner } from '../../models/owner.model'
import { NetworkError } from '../../models/error.model'

@Component({
  selector: 'owners-page',
  template: `<owners-list [owners]="owners | async" [error]="networkError | async" (onSignOut)="onSignOut($event)" (onDetails)="onDetails($event)"></owners-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwnerContainer implements OnInit {

  owners: Observable<Owner[]>;
  networkError: Observable<NetworkError>; 
  constructor(
    private http: HttpClient, 
    private router: Router,
    private store: Store<fromRoot.State>) { 
      this.owners = store.select(ownersSelectors.selectOwnersEntities);
      this.networkError = store.select(ownersSelectors.selectError);
    }
  
  ngOnInit() {
    this.store.dispatch(new OwnersActions.GetOwners());    
  }
  
  onSignOut() {
    this.store.dispatch(new AuthActions.SignOut());    
  }

  onDetails(id){
    this.router.navigate(['owners/',id])
  }

}
