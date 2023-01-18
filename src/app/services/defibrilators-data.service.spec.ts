import { TestBed } from '@angular/core/testing';

import { DefibrilatorsDataService } from './defibrilators-data.service';

describe('DefibrilatorsDataService', () => {
  let service: DefibrilatorsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefibrilatorsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
