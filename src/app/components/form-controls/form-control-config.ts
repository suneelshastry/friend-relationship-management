import { ValidatorFn } from '@angular/forms';

/**
 * Enums representing available form controls.
 */
export enum FormControlTypes {
  Inputbox,
  Chips,
}

/**
 * The config used to create form controls
 * dynamically.
 */
export interface FormControlConfig {
  controlType?: FormControlTypes;
  label?: string;
  key?: string;
  order?: number;
  validators?: ValidatorFn[];
  value?: any;
  required?: boolean;
}

/**
 * Textbox specific config interface
 */
export interface FormControlTextbox extends FormControlConfig {
  inputType?: string;
  value?: string | number;
  suffix?: string;
}

/**
 * Chips specific config interface
 */
export interface FormControlChips extends FormControlConfig {
  value?: string[];
}
