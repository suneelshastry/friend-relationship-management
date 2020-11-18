import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

export interface Person {
  name?: string;
  friends?: string[];
  age?: number;
  weight?: number;
}

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  enteredItemList: Person[] = [];

  constructor(public dialogRef: MatDialogRef<AddPersonComponent>) { }

  ngOnInit(): void {
  }

  addPerson(formGroup: FormGroup): void {
    if (formGroup.invalid) {
      formGroup.markAllAsTouched();
      return;
    }

    this.enteredItemList.push(formGroup.value);
    formGroup.reset();
  }

  close(formGroup: FormGroup): void {
    this.addPerson(formGroup);

    if (!formGroup.invalid) {
      this.dialogRef.close();
    }
  }
}
