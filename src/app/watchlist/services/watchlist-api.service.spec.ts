import { TestBed } from '@angular/core/testing';

import { WatchlistAPIService } from './watchlist-api.service';

describe('WatchlistAPIService', () => {
  let service: WatchlistAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchlistAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
