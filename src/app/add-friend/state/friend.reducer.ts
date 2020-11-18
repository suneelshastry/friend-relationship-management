import { Person } from '../add-friend.component';
import * as AppState from '../../state/app.reducer';
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as FriendActions from './friend.actions';

export interface State extends AppState.State {
    friends: FriendState;
}

export interface FriendState {
    friends: Person[];
}

const initialState: FriendState = {
    friends: [],
};

export const FriendReducer = createReducer(
    initialState,
    on(FriendActions.addFriend, (state, action): FriendState => {
        return {
            ...state,
            friends: [
                ...state.friends,
                action.friend
            ],
        };
    } )
);

const getFriendStateSelector = createFeatureSelector<FriendState>('friends');

export const getFriendsList = createSelector(
    getFriendStateSelector,
    state => state.friends,
);
