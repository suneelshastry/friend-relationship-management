import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControlConfig } from '@components';
import { Validators } from '@angular/forms';

@Injectable()
export class FormConfigService {

  getFormConfig(): Observable<FormControlConfig[]> {
    return of([
      {
        controlType: 'textbox',
        label: 'Name',
        key: 'name',
        value: '',
        order: 1,
        inputType: 'text',
        validators: [
          Validators.required
        ]
      },
      {
        controlType: 'chips',
        label: 'Friends',
        key: 'friends',
        value: [ ],
        order: 2,
        validators: [
          Validators.required
        ]
      },
      {
        controlType: 'textbox',
        label: 'Age',
        key: 'age',
        value: '',
        order: 3,
        inputType: 'number',
        validators: [
          Validators.required
        ]
      },
      {
        controlType: 'textbox',
        label: 'Weight',
        key: 'weight',
        value: '',
        order: 4,
        inputType: 'number',
        validators: [
          Validators.required
        ]
      }
    ]);
  }
}
