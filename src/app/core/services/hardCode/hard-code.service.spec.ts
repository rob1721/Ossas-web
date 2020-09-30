import { TestBed } from '@angular/core/testing';

import { HardCodeService } from './hard-code.service';

describe('HardCodeService', () => {
  let service: HardCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
