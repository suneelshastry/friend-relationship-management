import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { Store } from '@ngrx/store';
export interface Person {
  name?: string;
  friends?: string[];
  age?: number;
  weight?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Friend-management';

  constructor(
    public dialog: MatDialog,
    public store: Store<any>,
  ) { }

  open(): void {
    this.dialog.open(AddFriendComponent);
  }
}
