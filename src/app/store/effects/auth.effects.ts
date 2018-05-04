import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';

import * as AuthActions from '../actions/auth.action';
import { AuthService } from '../../services/auth.service';
import { NetworkError } from '../../models/error.model';

@Injectable()
export class AuthEffects {
    @Effect()
    signin$: Observable<Action> = this.actions$.ofType(AuthActions.SIGNIN)
        .map((action: AuthActions.SignIn) => action.payload)
        .switchMap(data => 
        this.authService.login(data)
        .do(data => {
            this.authService.setToken(data);
            this.router.navigate(['owners']);
        })
        .map(data => new AuthActions.SignInSuccess(data))
        .catch(error => Observable.of(new AuthActions.SignInFailure(error)))        
        )   

    @Effect()
    signup$: Observable<Action> = this.actions$.ofType(AuthActions.SIGNUP)
        .map((action: AuthActions.SignUp) => action.payload)
        .switchMap(data => 
        this.authService.signup(data)
        .do(data => {
            data.success && this.router.navigate(['login']);            
        })
        .map(data => data.success ? new AuthActions.SignUpSuccess(data) : new AuthActions.SignUpFailure({name: data.msg, statusCode: null, description: ''}))
        .catch(error => Observable.of(new AuthActions.SignUpFailure(error)))        
        )

    @Effect()         
    checkAuthStatus$: Observable<Action> = this.actions$.ofType(AuthActions.SET_AUTH_STATUS)
        .map((action: AuthActions.SetAuthStatus) => new AuthActions.SetAuthStatusDone(!!this.authService.getToken()))

    @Effect({dispatch: false})         
    signout$: Observable<Action> = this.actions$.ofType(AuthActions.SIGNOUT)
        .do(action => {
            this.authService.removeTokens();
            this.router.navigate(['/login']);
        })
        
            
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }

}