import { Injectable } from '@angular/core';
import { Person } from '@models';
import { NetworkChartData, NetworkLink } from '@components';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
/**
 * This service abstracts the translation of raw friend
 * data to chart-readable format.
 */
export class MapService {
  mapToNetworkData(friendsList: Person[]): Observable<NetworkChartData> {
    if (!friendsList || friendsList.length === 0) {
      return of({});
    }

    try {
      let index = 0;
      const relationshipMap: NetworkLink[] = [];
      const personMap = new Map<string, number>();

      friendsList.forEach((person) => {
        const personName = person.name.toLowerCase().trim();
        if (!personMap.has(personName)) {
          personMap.set(personName, index);
          index = index + 1;
        }

        person.friends.forEach((friend) => {
          const friendName = friend.toLowerCase().trim();
          if (!personMap.has(friendName)) {
            personMap.set(friendName, index);
            index = index + 1;
          }
          relationshipMap.push({
            source: personMap.get(personName),
            target: personMap.get(friendName),
          });
        });
      });

      return of({
        nodes: Array.from(personMap, ([name, id]) => ({ name, id })),
        links: relationshipMap,
      });
    } catch (err) {
      // TODO Log error
      throwError(err);
    }
  }
}
