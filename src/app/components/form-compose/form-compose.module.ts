import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlsModule } from '../form-controls/form-controls.module';
import { FormComposeComponent } from './form-compose.component';
import { FormComposeService } from './form-compose.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FormComposeComponent
  ],
  imports: [
    CommonModule,
    FormControlsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormComposeComponent
  ],
  providers: [
    FormComposeService,
  ]
})
export class FormComposeModule { }
