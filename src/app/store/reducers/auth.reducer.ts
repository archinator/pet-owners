import { SignInModel } from '../../models/signin.model'
import { SignUpModel } from '../../models/signup.model'
import { NetworkError } from '../../models/error.model'
import * as AuthActions from '../actions/auth.action'

export interface State {
    signInInfo: SignInModel;
    isSignInLoading: boolean;
    isSignInLoadSuccess: boolean;
    signUpInfo: SignUpModel;
    isSignUpLoading: boolean;
    isSignUpLoadSuccess: boolean;
    error: NetworkError;
}

const initialState: State = {
    signInInfo: null,
    isSignInLoading: false,
    isSignInLoadSuccess: false,
    signUpInfo: null,
    isSignUpLoading: false,
    isSignUpLoadSuccess: false,
    error: null
};

export function reducer(state = initialState, action: AuthActions.All): State {
    switch(action.type){
        case AuthActions.SIGNIN: {
            return  {
                ...state,
                signInInfo: action.payload,
                isSignInLoading: true,
                isSignInLoadSuccess: false,
            }
        }
        case AuthActions.SIGNIN_SUCCESS: {
            return {
                ...state,
                signInInfo: null,
                isSignInLoading: false,
                isSignInLoadSuccess: true,
            };
        }
        case AuthActions.SIGNIN_FAILURE: {
            return {
                ...state,
                signInInfo: null,
                isSignInLoading: false,
                isSignInLoadSuccess: false,
                error: action.payload
            }
        }
        case AuthActions.SIGNUP: {
            return  {
                ...state,
                signUpInfo: action.payload,
                isSignUpLoading: true,
                isSignUpLoadSuccess: false,
            }
        }
        case AuthActions.SIGNUP_SUCCESS: {
            return {
                ...state,
                signUpInfo: null,
                isSignUpLoading: false,
                isSignUpLoadSuccess: true,
            };
        }
        case AuthActions.SIGNUP_FAILURE: {
            return {
                ...state,
                signUpInfo: null,
                isSignUpLoading: false,
                isSignUpLoadSuccess: false,
                error: action.payload
            }
        }
        case AuthActions.SET_AUTH_STATUS_DONE: {
            return {
                ...state,
                isSignInLoadSuccess: action.payload
            }
        }
        case AuthActions.SIGNOUT: {
            return {
                ...state,
                isSignInLoadSuccess: false
            }
        }
        default: {
            return state;
        }
    }
}

