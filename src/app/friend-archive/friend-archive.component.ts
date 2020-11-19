import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MapService } from '@friend-archive/services/map.service';
import { FriendState, getFriendsList } from '@friend-archive/state';
import { NetworkChartData } from '@components';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-friend-archive',
  templateUrl: './friend-archive.component.html',
  styleUrls: ['./friend-archive.component.scss'],
  providers: [
    MapService
  ]
})
export class FriendArchiveComponent implements OnInit {
  chartData$: Observable<NetworkChartData>;

  constructor(
    private mapService: MapService,
    private store: Store<FriendState>
  ) { }

  ngOnInit(): void {
    // TODO Add error handling
    this.chartData$ = this.store.select(getFriendsList)
    .pipe(
      switchMap(r => this.mapService.mapToNetworkData(r))
    );
  }
}
