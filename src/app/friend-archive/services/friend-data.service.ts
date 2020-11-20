import { Injectable } from '@angular/core';
import { Person } from '@models';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class FriendDataService {
    friendsRepo: Person[] = [];

    getFriends(): Observable<Person[]> {
        return of(this.friendsRepo);
    }

    addNewFriend(friend: Person): Observable<Person|Error> {
        if (this.friendsRepo.findIndex(i => i.name === friend.name) > -1) {
            return throwError(new Error('Friend already exists'));
        }
        this.friendsRepo.push(
            {
                ...friend,
                id: this.friendsRepo.length,
            }
        );

        return of(friend);
    }
}
