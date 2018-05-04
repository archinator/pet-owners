import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from "@angular/router";
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromRoot from '../../store/reducers/index'
import { selectIsAuthenticated } from '../../store/selectors/auth.selector'
import * as AuthActions from '../../store/actions/auth.action'

@Component({
  selector: 'navigation-page',
  template: `<navigation [isAuthenticated]="isAuthenticated | async" (onSignOut)="onSignOut($event)"></navigation>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationContainer implements OnInit {

  isAuthenticated: Observable<boolean>;
  constructor(
    private store: Store<fromRoot.State>) { 
      this.isAuthenticated = store.select(selectIsAuthenticated);
    }
  
  ngOnInit() {
  }

  onSignOut() {
      this.store.dispatch(new AuthActions.SignOut());
  }

}
