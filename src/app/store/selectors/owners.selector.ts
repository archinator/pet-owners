import { State } from '../reducers/index';
import { createSelector } from '@ngrx/store';

export const selectOwners = (state: State) => state.owners.owners;

export const selectOwnersEntities = createSelector(selectOwners, (owners) => {
    return Object.keys(owners).map(id => owners[id]);
})

export const selectOwner = (state: State) => state.owners.selectedOwner

export const selectError = (state: State) => state.owners.error;