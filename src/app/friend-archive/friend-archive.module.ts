import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendArchiveComponent } from './friend-archive.component';
import {
  AddFriendComponent
} from '@friend-archive/components/add-friend/add-friend.component';
import { NetworkChartModule, FormComposeModule } from '@components';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { FriendReducer } from '@friend-archive/state';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FriendArchiveComponent,
  }
]

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
    RouterModule.forChild(routes),
    StoreModule.forFeature('friends', FriendReducer),
  ],
  exports: [
    AddFriendComponent,
    FriendArchiveComponent,
  ],
})
export class FriendArchiveModule { }
