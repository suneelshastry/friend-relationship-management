import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  FormControlConfig,
  FormControlTextbox,
  FormControlChips,
  FormControlTypes,
} from '@components';
import { Validators } from '@angular/forms';

@Injectable()
export class FormConfigService {
  getFormConfig(): Observable<FormControlConfig[]> {
    return of([
      {
        controlType: FormControlTypes.Inputbox,
        label: 'Name',
        key: 'name',
        value: '',
        order: 1,
        inputType: 'text',
        validators: [Validators.required],
        required: true,
      } as FormControlTextbox,
      {
        controlType: FormControlTypes.Chips,
        label: 'Friends',
        key: 'friends',
        value: [],
        order: 2,
        validators: [Validators.required],
        required: true,
      } as FormControlChips,
      {
        controlType: FormControlTypes.Inputbox,
        label: 'Age',
        key: 'age',
        value: '',
        order: 3,
        inputType: 'number',
        validators: [
          Validators.required,
          Validators.max(150),
          Validators.min(0),
        ],
        suffix: 'years',
        required: true,
      } as FormControlTextbox,
      {
        controlType: FormControlTypes.Inputbox,
        label: 'Weight',
        key: 'weight',
        value: '',
        order: 4,
        inputType: 'number',
        validators: [
          Validators.required,
          Validators.max(1000),
          Validators.min(0),
        ],
        suffix: 'kg',
        required: true,
      } as FormControlTextbox,
    ]);
  }
}
