import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import * as OwnersActions from '../actions/owners.action';
import { OwnersService } from '../../services/owners.service';
import { NetworkError } from '../../models/error.model';

@Injectable()
export class OwnersEffects {
    @Effect()
    owners$: Observable<Action> = this.actions$.ofType(OwnersActions.GET_OWNERS)
        .map((action: OwnersActions.GetOwners) => action.payload)
        .switchMap(() => 
        this.ownersService.getOwners()
        .map(data => new OwnersActions.GetOwnersSuccess(data))
        .catch(error => Observable.of(new OwnersActions.GetOwnersFailure({name: error.statusText, statusCode: error.status, description: ''})))
        )        
    
    @Effect()
    owner$: Observable<Action> = this.actions$.ofType(OwnersActions.GET_OWNER)
        .map((action: OwnersActions.GetOwner) => action.payload)
        .switchMap(data => 
        this.ownersService.getOwner(data)
        .map(data => new OwnersActions.GetOwnerSuccess(data))
        .catch(error => Observable.of(new OwnersActions.GetOwnersFailure({name: error.statusText, statusCode: error.status, description: ''})))
        ) 
        
        
    constructor(
        private actions$: Actions,
        private ownersService: OwnersService
    ) { }

}