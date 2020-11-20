import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendArchiveComponent } from './friend-archive.component';
import { AddFriendComponent } from '@friend-archive/components/add-friend/add-friend.component';
import { NetworkChartModule, FormComposeModule } from '@components';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { friendReducer } from '@friend-archive/state';
import { RouterModule, Routes } from '@angular/router';
import { FriendEffects } from './state';
import { FriendDataService } from './services/friend-data.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FriendArchiveComponent,
  },
];

@NgModule({
  declarations: [AddFriendComponent, FriendArchiveComponent],
  imports: [
    CommonModule,
    NetworkChartModule,
    FormComposeModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatSnackBarModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('friends', friendReducer),
    EffectsModule.forFeature([FriendEffects]),
  ],
  exports: [AddFriendComponent, FriendArchiveComponent],
  providers: [FriendDataService],
})
export class FriendArchiveModule {}
