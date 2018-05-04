import { Action } from '@ngrx/store'
import { SignInModel, SignInResponseModel } from '../../models/signin.model'
import { SignUpModel, SignUpResponseModel } from '../../models/signup.model'
import { NetworkError } from '../../models/error.model';

export const SIGNIN = '[Auth] Sign In'
export const SIGNIN_SUCCESS = '[Auth] Sign In Success'
export const SIGNIN_FAILURE = '[Auth] Sign In Failure'
export const SIGNOUT = '[Auth] Sign Out'
export const SIGNOUT_SUCCESS = '[Auth] Sign Out Success'
export const SIGNUP = '[Auth] Sign Up'
export const SIGNUP_SUCCESS = '[Auth] Sign Up Success'
export const SIGNUP_FAILURE = '[Auth] Sign Up Failure'
export const SET_AUTH_STATUS = '[Auth] Set Auth Status'
export const SET_AUTH_STATUS_DONE = '[Auth] Set Auth Status Done'

export class SignIn implements Action {
    readonly type = SIGNIN;

    constructor(public payload: SignInModel){}
}

export class SignInSuccess implements Action {
    readonly type = SIGNIN_SUCCESS;

    constructor(public payload: SignInResponseModel){}
}

export class SignInFailure implements Action {
    readonly type = SIGNIN_FAILURE;

    constructor(public payload: NetworkError){}
}

export class SignOut implements Action {
    readonly type = SIGNOUT;

    constructor(public payload: any = null){}
}

export class SignOutSuccess implements Action {
    readonly type = SIGNOUT_SUCCESS;

    constructor(public payload: any = null){}
}

export class SignUp implements Action {
    readonly type = SIGNUP;

    constructor(public payload: SignUpModel){}
}

export class SignUpSuccess implements Action {
    readonly type = SIGNUP_SUCCESS;

    constructor(public payload: SignUpResponseModel){}
}

export class SignUpFailure implements Action {
    readonly type = SIGNUP_FAILURE;

    constructor(public payload: NetworkError){}
}

export class SetAuthStatus implements Action {
    readonly type = SET_AUTH_STATUS;

    constructor(public payload: any = null){}
}

export class SetAuthStatusDone implements Action {
    readonly type = SET_AUTH_STATUS_DONE;

    constructor(public payload: boolean){}
}
export type All = SignIn | SignInSuccess | SignInFailure | SignUp | SignUpSuccess | SignUpFailure | SetAuthStatus | SetAuthStatusDone | SignOut;