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
})
export class FormComposeComponent implements OnInit {
  @Input() formControlConfigs: FormControlConfig[];
  formGroup: FormGroup;
  formControlTypes = FormControlTypes;

  constructor(
    private formComposeService: FormComposeService
  ) { }

  ngOnInit(): void {
    this.formGroup =
      this.formComposeService.buildFormGroup(this.formControlConfigs);
  }
}
