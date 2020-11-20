import { Injectable } from '@angular/core';
import { Person } from '@models';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
/**
 * This service abstracts the Friend data storage service.
 * This is just a placeholder. Maybe replaced with actual
 * API calls in future.
 */
export class FriendDataService {
  friendsRepo: Person[] = [];

  getFriends(): Observable<Person[]> {
    return of(this.friendsRepo);
  }

  addNewFriend(friend: Person): Observable<Person | Error> {
    if (this.friendsRepo.findIndex((i) => i.name === friend.name.trim()) > -1) {
      return throwError(new Error('Friend entry already exists'));
    }
    this.friendsRepo.push({
      ...friend,
      id: this.friendsRepo.length,
    });

    return of(friend);
  }
}
