import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControlConfig } from '../form-controls/form-control-config';
import { FormComposeService } from './form-compose.service';

@Component({
  selector: 'app-form-compose',
  templateUrl: './form-compose.component.html',
  styleUrls: ['./form-compose.component.scss']
})
export class FormComposeComponent implements OnInit {
  formControlConfigs: FormControlConfig[];
  formGroup: FormGroup;
  constructor(
    private formComposeService: FormComposeService
  ) { }

  ngOnInit(): void {
    // Todo Expose the below variable as input binding
    this.formControlConfigs = [
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
        value: [
          'rama',
          'seetha'
        ],
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
    ];

    this.formGroup = this.formComposeService.buildFormGroup(this.formControlConfigs);
  }
}
