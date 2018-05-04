import { ActionReducerMap } from '@ngrx/store'
import * as fromRouter from '@ngrx/router-store';

import * as fromOwners from './owners.reducer'
import * as fromAuth from './auth.reducer'
import { RouterStateUrl } from '../reducers/router.reducer';


export interface State {
    owners: fromOwners.OwnersState,
    auth: fromAuth.State,
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
    owners: fromOwners.reducer,
    auth: fromAuth.reducer,
    routerReducer: fromRouter.routerReducer
}







