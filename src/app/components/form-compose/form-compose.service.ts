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
    const group = { };

    controlConfigs.forEach((config) => {
        group[config.key] =
            new FormControl(config.value, config.validators);
    });

    return new FormGroup(group);
}
}
