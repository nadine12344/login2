import { TestBed } from '@angular/core/testing';

import { LogRegisterService } from './log-register.service';

describe('LogRegisterService', () => {
  let service: LogRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
