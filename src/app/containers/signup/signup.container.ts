import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from "@angular/router";
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as AuthActions from '../../store/actions/auth.action';
import * as fromRoot from '../../store/reducers/index'
import * as authSelectors from '../../store/selectors/auth.selector'
import { SignUpModel } from '../../models/signup.model'
import { NetworkError } from '../../models/error.model';

@Component({
  selector: 'sign-in-page',
  template: `<sign-up (onSignUp)="onSignUp($event)" [message]="networkError | async"></sign-up>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpContainer implements OnInit {

//   data: Observable<SignInModel>;
  networkError: Observable<NetworkError>; 
  constructor(
    private http: HttpClient, 
    private router: Router,
    private store: Store<fromRoot.State>) { 
        this.networkError = store.select(authSelectors.selectSignUpError);
    }
  
  ngOnInit() {
      
  }

  onSignUp(creds: SignUpModel){
      this.store.dispatch(new AuthActions.SignUp(creds));  
  }  

}
