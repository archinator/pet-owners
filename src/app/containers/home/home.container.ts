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
  selector: 'home-page',
  template: `<home></home>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainer implements OnInit {

  constructor(
    private store: Store<fromRoot.State>) { 
    }
  
  ngOnInit() {
      this.store.dispatch(new AuthActions.SetAuthStatus());   
  }

}
