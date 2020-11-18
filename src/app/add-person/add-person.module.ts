import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { FormComposeModule } from '../components/form-compose/form-compose.module';
import { MatButtonModule } from '@angular/material/button';
import { AddPersonComponent } from './add-person.component';

@NgModule({
  declarations: [
    AddPersonComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormComposeModule,
    MatButtonModule,
  ],
  exports: [
    AddPersonComponent,
  ]
})
export class AddPersonModule { }
