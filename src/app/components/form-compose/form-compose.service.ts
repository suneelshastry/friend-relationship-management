import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlConfig } from '../form-controls/form-control-config';

@Injectable()
/**
 * The service which holds the logic required for
 * the processing of form control config
 */
export class FormComposeService {

  constructor() { }

  buildFormGroup(controlConfigs: FormControlConfig[]): FormGroup {
    const keySet = new Set();
    const group = { };

    controlConfigs.forEach((config) => {
      if (keySet.has(config.key)) {
        // TODO Log error
        throw new Error('One or more form control keys are not unique');
      }
      keySet.add(config.key);
      group[config.key] =
            new FormControl(config.value, config.validators);
    });

    return new FormGroup(group);
}
}
