import { ValidatorFn } from '@angular/forms';

/**
 * The config used to create form controls
 * dynamically.
 */
export interface FormControlConfig {
    // Todo: Rethink about derivation of this base interface
    controlType?: string;
    label?: string;
    key?: string;
    order?: number;
    validators?: ValidatorFn[];
    value?: string | string[] | number | boolean;
    inputType?: string;
}
