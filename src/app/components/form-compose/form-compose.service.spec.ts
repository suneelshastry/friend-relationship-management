import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { TestBed } from '@angular/core/testing';
import { Validators } from '@angular/forms';
import { FormControlConfig, FormControlTextbox, FormControlTypes } from '../form-controls';

import { FormComposeService } from './form-compose.service';

describe('FormComposeService', () => {
  let service: FormComposeService;

  const formConfig: FormControlConfig[] = [
    {
      controlType: FormControlTypes.Inputbox,
          label: 'Name',
          key: 'name',
          value: '',
          order: 1,
          inputType: 'text',
          validators: [
            Validators.required
          ]
    } as FormControlTextbox,
  ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormComposeService
      ]
    });
    service = TestBed.inject(FormComposeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should build form-group per config', () => {
      const formGroup = service.buildFormGroup(formConfig);
      const controls = Object.keys(formGroup.controls);

      expect(controls.length)
        .toBe(1);

      expect(controls[0])
        .toBe(formConfig[0].key);
  });

  it('Should throw error when key is repeated', () => {
      formConfig.push(formConfig[0]);
      expect(() => service.buildFormGroup(formConfig))
        .toThrowError();
      formConfig.pop();
  });
});
