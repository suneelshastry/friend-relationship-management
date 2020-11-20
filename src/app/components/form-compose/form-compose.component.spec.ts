import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import {
  FormControlConfig,
  FormControlTextbox,
  FormControlTypes
} from '../form-controls';

import { FormComposeComponent } from './form-compose.component';
import { FormComposeService } from './form-compose.service';

describe('FormComposeComponent', () => {
  let component: FormComposeComponent;
  let fixture: ComponentFixture<FormComposeComponent>;
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

  const formComposeService = {
    buildFormGroup: (configs: FormControlConfig[]) =>
      new FormGroup({}),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComposeComponent ],
      providers: [
        {provide: FormComposeService, useValue: formComposeService},
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should create form controls dynamically', () => {
    component.formControlConfigs = formConfig;
    component.ngOnInit();

    fixture.detectChanges();

    const formGroup = fixture.nativeElement
      .querySelector('.form-froup');

    expect(formGroup)
      .toBeDefined();

    const inputbox = fixture.nativeElement
      .querySelector('.textbox');

    expect(inputbox)
      .toBeDefined();
  });
});
