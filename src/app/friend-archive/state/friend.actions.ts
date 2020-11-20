import { Person } from '@models';
import { Action } from '@ngrx/store';

export enum FriendActionTypes {
    AddFriend = '[Add Friend]Add a friend with details',
    AddFriendSuccess = '[Add Friend]Add friend completed',
    AddFriendFailure = '[Add Friend]Add friend failed with error',
}

export class FriendAction implements Action {
    type: string;
    payload: {
        friend: Person,
        error: string,
    };
}

export class AddFriendAction implements Action {
    readonly type = FriendActionTypes.AddFriend;

    constructor(readonly payload: {friend: Person}) { }
}

export class AddFriendSuccessAction implements Action {
    readonly type = FriendActionTypes.AddFriendSuccess;

    constructor(readonly payload: {friend: Person}) { }
}

export class AddFriendFailureAction implements Action {
    readonly type = FriendActionTypes.AddFriendFailure;

    constructor(readonly payload: {error: string}) { }
}

export type FriendActionsUnion =
    AddFriendAction | AddFriendSuccessAction | AddFriendFailureAction;
