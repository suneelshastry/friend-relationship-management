import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendArchiveComponent } from './friend-archive.component';
import {
  AddFriendComponent
} from '@friend-archive/components/add-friend/add-friend.component';
import { MapService } from './services/map.service';
import { NetworkChartModule, FormComposeModule } from '@components';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { FriendReducer } from '@friend-archive/state';

@NgModule({
  declarations: [
    AddFriendComponent,
    FriendArchiveComponent,
  ],
  imports: [
    CommonModule,
    NetworkChartModule,
    FormComposeModule,
    MatButtonModule,
    StoreModule.forFeature('friends', FriendReducer),
  ],
  exports: [
    AddFriendComponent,
    FriendArchiveComponent,
  ],
  providers: [
    MapService,
  ]
})
export class FriendArchiveModule { }
