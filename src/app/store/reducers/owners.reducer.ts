import { Owner } from '../../models/owner.model'
import { NetworkError } from '../../models/error.model'
import * as OwnersActions from '../actions/owners.action'

export interface OwnersState {
    owners: { [_id: string] : Owner};
    isLoading: boolean;
    isLoadSuccess: boolean;
    error: NetworkError;
    selectedOwner: Owner;
}

const initialState: OwnersState = {
    owners: {},
    isLoading: false,
    isLoadSuccess: false,
    error: null,
    selectedOwner: null
};

export function reducer(state = initialState, action: OwnersActions.All): OwnersState {
    switch(action.type){
        case OwnersActions.GET_OWNERS: {
            return  {
                ...state,
                isLoading: true,
                isLoadSuccess: false,
            }
        }
        case OwnersActions.GET_OWNERS_SUCCESS: {
            const owners = action.payload.reduce((owners: { [_id: string]:Owner}, owner: Owner) => {
                return {
                    ...owners,
                    [owner._id]: owner
                };
            }, 
            {
                ...state.owners,
            }
            );
            return {
                ...state,
                owners,
                isLoading: false,
                isLoadSuccess: true,
            };
        }
        case OwnersActions.GET_OWNERS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                error: action.payload
            }
        }
        case OwnersActions.GET_OWNER: {
            return  {
                ...state,
                isLoading: true,
                isLoadSuccess: false,
            }
        }
        case OwnersActions.GET_OWNER_SUCCESS: {            
            return {
                ...state,
                selectedOwner: action.payload,
                isLoading: false,
                isLoadSuccess: true,
            };
        }
        case OwnersActions.GET_OWNER_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

