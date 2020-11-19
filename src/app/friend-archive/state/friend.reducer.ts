import { Person } from '@models';
import * as AppState from '../../state/app.reducer';
import * as FriendActions from './friend.actions';
import {
    createReducer, on,
    createSelector,
    createFeatureSelector,
} from '@ngrx/store';

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
                {
                    ...action.friend,
                    id: state.friends.length
                }
            ],
        };
    } )
);

const getFriendStateSelector =
    createFeatureSelector<FriendState>('friends');

export const getFriendsList = createSelector(
    getFriendStateSelector,
    state => state.friends,
);
