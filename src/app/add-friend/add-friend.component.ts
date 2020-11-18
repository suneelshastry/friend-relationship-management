import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FriendState } from './state/friend.reducer';
import * as FriendActions from './state/friend.actions';

export interface Person {
  name?: string;
  friends?: string[];
  age?: number;
  weight?: number;
}

@Component({
  selector: 'app-add-person',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent implements OnInit {
  enteredItemList: Person[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddFriendComponent>,
    private store: Store<FriendState>,
  ) { }

  ngOnInit(): void {
  }

  addPerson(formGroup: FormGroup): void {
    if (formGroup.invalid) {
      formGroup.markAllAsTouched();
      return;
    }

    this.enteredItemList.push(formGroup.value);
    this.store.dispatch(
      FriendActions.addFriend(
        {friend: formGroup.value as Person}
      )
    );
    formGroup.reset();
  }

  close(formGroup: FormGroup): void {
    this.addPerson(formGroup);

    if (!formGroup.invalid) {
      this.dialogRef.close();
    }
  }
}
