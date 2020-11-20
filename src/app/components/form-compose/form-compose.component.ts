import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormControlConfig,
  FormControlTypes,
} from '../form-controls/form-control-config';
import { FormComposeService } from './form-compose.service';

@Component({
  selector: 'app-form-compose',
  templateUrl: './form-compose.component.html',
  styleUrls: ['./form-compose.component.scss'],
  providers: [
    FormComposeService
  ]
})
/**
 * This component abstracts the logic of building
 * dynamic form as per the given config for form-controls.
 */
export class FormComposeComponent implements OnInit {
  @Input() formControlConfigs: FormControlConfig[];
  formGroup: FormGroup;
  formControlTypes = FormControlTypes;

  constructor(
    private formComposeService: FormComposeService
  ) { }

  ngOnInit(): void {
    // Build formGroup by iterating over form-control configs
    this.formGroup =
      this.formComposeService.buildFormGroup(this.formControlConfigs);
  }
}
