import { State } from '../reducers/index';

export const selectSignInInfo = (state: State) => state.auth.signInInfo;

export const selectSignInError = (state: State) => state.auth.error;

export const selectSignUpError = (state: State) => state.auth.error;

export const selectIsAuthenticated = (state: State) => state.auth.isSignInLoadSuccess;