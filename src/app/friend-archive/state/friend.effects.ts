import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import {
    addFriend,
    addFriendSuccess,
    addFriendFailure,
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
            ofType<ReturnType<typeof addFriend>>(addFriend.type),
            mergeMap((action) =>
                this.friendDataService.addNewFriend(action.friend
            ).pipe(
                map((newFriend) => {
                    return (addFriendSuccess({friend: newFriend}));
                }),
                catchError((err: Error) => {
                    // TODO Log error
                    this.showError(err.message);
                    return of(addFriendFailure({error: err.message}));
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
