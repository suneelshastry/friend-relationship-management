import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddPersonComponent } from './add-person/add-person.component';

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

  constructor(public dialog: MatDialog) { }

  open(): void {
    this.dialog.open(AddPersonComponent);
  }
}
