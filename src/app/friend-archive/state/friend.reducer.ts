import { Person } from '@models';
import * as AppState from '../../state/app.reducer';
import { FriendAction, FriendActionTypes } from './friend.actions';
import {
    createSelector,
    createFeatureSelector,
} from '@ngrx/store';

export interface State extends AppState.State {
    friends: FriendState;
}

export interface FriendState {
    friends: Person[];
    error?: string | null;
}

const initialState: FriendState = {
    friends: [],
    error: null,
};

export function friendReducer(
    state: FriendState = initialState,
    action: FriendAction
): FriendState {
    switch (action.type) {
        case FriendActionTypes.AddFriendSuccess:
            return {
                ...state,
                friends: [
                    ...state.friends,
                    action.payload.friend,
                ]
            };
        case FriendActionTypes.AddFriendFailure:
            return {
                ...state,
                error: action.payload.error,
            };
        default: return state;
    }
}

const getFriendStateSelector =
    createFeatureSelector<FriendState>('friends');

export const getFriendsList = createSelector(
    getFriendStateSelector,
    state => state.friends,
);

export const getError = createSelector(
    getFriendStateSelector,
    state => state.error,
);
