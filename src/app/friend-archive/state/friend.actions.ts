import { createAction, props } from '@ngrx/store';
import { Person } from '@models';

export const loadFriends = createAction(
    '[Load friends]Load friend records',
    props<{friends: Person[]}>(),
);

export const addFriend = createAction(
    '[Add Friend]Add a friend with details',
    props<{friend: Person}>()
);

export const addFriendSuccess = createAction(
    '[Add Friend]Add friend completed',
    props<{friend: Person}>()
);

export const addFriendFailure = createAction(
    '[Add Friend]Add friend completed',
    props<{error: string}>()
);
