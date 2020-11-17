import { TestBed } from '@angular/core/testing';

import { FormComposeService } from './form-compose.service';

describe('FormComposeService', () => {
  let service: FormComposeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormComposeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
