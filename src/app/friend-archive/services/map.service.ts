import { Injectable } from '@angular/core';
import { Person } from '@models';
import { NetworkChartData, NetworkLink } from '@components';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class MapService {
    // TODO add error handling
    mapToNetworkData(friendsList: Person[]): Observable<NetworkChartData> {
        if (!friendsList || friendsList.length === 0) {
            return of({});
        }

        try {
            let index = 0;
            const relationshipMap: NetworkLink[] = [];
            const personMap = new Map<string, number>();

            friendsList.forEach((person) => {
                if (!personMap.has(person.name.trim())) {
                    personMap.set(person.name.trim(), index);
                    index = index + 1;
                }

                person.friends.forEach((friend) => {
                    if (!personMap.has(friend.trim())) {
                        personMap.set(friend.trim(), index);
                        index = index + 1;
                    }
                    relationshipMap.push({
                        source: personMap.get(person.name.trim()),
                        target: personMap.get(friend.trim())
                    });
                });
            });

            return of({
                nodes: Array.from(personMap, ([name, id]) => ({name, id})),
                links: relationshipMap
            });
        } catch (err) {
            throwError(err);
        }
    }
}
