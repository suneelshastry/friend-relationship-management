import { Person } from '@models';
import {
    createReducer, on,
    createSelector,
    createFeatureSelector
} from '@ngrx/store';
import * as AppState from '../../state/app.reducer';
import * as FriendActions from './friend.actions';

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

export const friendReducer = createReducer(
    initialState,
    on(FriendActions.addFriendSuccess,
        (state, action): FriendState => {
            return {
                ...state,
                friends: [
                    ...state.friends,
                    action.friend
                ],
            };
    }),
    on(FriendActions.addFriendFailure,
        (state, action): FriendState => {
            return {
                ...state,
                error: action.error
            };
        }
    )
);

// TODO extract dangling string to a constant
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
