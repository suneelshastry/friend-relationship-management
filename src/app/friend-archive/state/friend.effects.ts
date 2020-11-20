import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {
    AddFriendAction,
    AddFriendFailureAction,
    AddFriendSuccessAction,
    FriendActionTypes
} from './friend.actions';
import { FriendDataService } from '../services/friend-data.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

@Injectable()
export class FriendEffects {
    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(
        private actions$: Actions,
        private friendDataService: FriendDataService,
        private snackBar: MatSnackBar,
    ) { }

    @Effect()
    addFriend$ = this.actions$
        .pipe(
            ofType<AddFriendAction>(FriendActionTypes.AddFriend),
            mergeMap((action) =>
                this.friendDataService.addNewFriend(action.payload.friend
            ).pipe(
                map((newFriend) => {
                    return (new AddFriendSuccessAction({friend: newFriend}));
                }),
                catchError((err: Error) => {
                    this.showError(err.message);
                    return of(new AddFriendFailureAction({error: err.message}));
                })
            )
        )
    );

    showError(message: string): void {
        if (!message) {
          return;
        }

        this.snackBar.open(message, '', {
          duration: 1200,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: 'alert-error'
        });
      }
}
