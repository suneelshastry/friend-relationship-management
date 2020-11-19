import { createAction, props } from '@ngrx/store';
import { Person } from '@models';

export const addFriend = createAction(
    '[Add Friend]Add a friend with details',
    props<{friend: Person}>()
);
