import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormChipsComponent } from './chips-control.component';
import { FormTextboxComponent } from './textbox-control.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
  ],
  declarations: [FormTextboxComponent, FormChipsComponent],
  exports: [FormTextboxComponent, FormChipsComponent],
})
/**
 * The module that holds all the available
 * form controls that can be dynamically generated.
 */
export class FormControlsModule {}
