import { TestBed } from '@angular/core/testing';

import { TVAPIService } from './tvapi.service';

describe('TVAPIService', () => {
  let service: TVAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TVAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
