import { TestBed } from '@angular/core/testing';

import { SingleDataService } from './single-data.service';

describe('SingleDataService', () => {
  let service: SingleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
