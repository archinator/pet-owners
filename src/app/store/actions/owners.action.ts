import { Action } from '@ngrx/store'
import { Owner } from '../../models/owner.model'
import { NetworkError } from '../../models/error.model'

export const GET_OWNERS = '[Owners] Get Owners'
export const GET_OWNERS_SUCCESS = '[Owners] Get Owners Success'
export const GET_OWNERS_FAILURE = '[Owners] Get Owners Failure'
export const GET_OWNER = '[Owners] Get Owner'
export const GET_OWNER_SUCCESS = '[Owners] Get Owner Success'
export const GET_OWNER_FAILURE = '[Owners] Get Owner Failure'

export class GetOwners implements Action {
    readonly type = GET_OWNERS;

    constructor(public payload: any = null){}
}

export class GetOwnersSuccess implements Action {
    readonly type = GET_OWNERS_SUCCESS;

    constructor(public payload: Owner[]){}
}

export class GetOwnersFailure implements Action {
    readonly type = GET_OWNERS_FAILURE;

    constructor(public payload: NetworkError){}
}

export class GetOwner implements Action {
    readonly type = GET_OWNER;

    constructor(public payload: string){}
}

export class GetOwnerSuccess implements Action {
    readonly type = GET_OWNER_SUCCESS;

    constructor(public payload: Owner){}
}

export class GetOwnerFailure implements Action {
    readonly type = GET_OWNER_FAILURE;

    constructor(public payload: NetworkError){}
}
export type All = GetOwners | GetOwnersSuccess | GetOwnersFailure | GetOwner | GetOwnerSuccess | GetOwnerFailure;