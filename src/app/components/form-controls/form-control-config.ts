import { ValidatorFn } from '@angular/forms';

export enum FormControlTypes {
    Inputbox,
    Chips,
}

/**
 * The config used to create form controls
 * dynamically.
 */
export interface FormControlConfig {
    // Todo: Rethink about derivation of this base interface
    controlType?: FormControlTypes;
    label?: string;
    key?: string;
    order?: number;
    validators?: ValidatorFn[];
    value?: any;
}

export interface FormControlTextbox extends FormControlConfig {
    inputType?: string;
    value?: string|number;
}

export interface FormControlChips extends FormControlConfig {
    value?: string[];
}
