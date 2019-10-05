import { TestBed } from '@angular/core/testing';

import { FlagServiceService } from './flag-service.service';

describe('FlagServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlagServiceService = TestBed.get(FlagServiceService);
    expect(service).toBeTruthy();
  });
});
