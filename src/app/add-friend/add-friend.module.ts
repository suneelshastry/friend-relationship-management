import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { FormComposeModule } from '../components/form-compose/form-compose.module';
import { MatButtonModule } from '@angular/material/button';
import { AddFriendComponent } from './add-friend.component';
import { StoreModule } from '@ngrx/store';
import { FriendReducer } from './state/friend.reducer';

@NgModule({
  declarations: [
    AddFriendComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormComposeModule,
    MatButtonModule,
    StoreModule.forFeature('friends', FriendReducer),
  ],
  exports: [
    AddFriendComponent,
  ]
})
export class AddFriendModule { }
