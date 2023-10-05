import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistCardTVComponent } from './watchlist-card-tv.component';

describe('WatchlistCardTVComponent', () => {
  let component: WatchlistCardTVComponent;
  let fixture: ComponentFixture<WatchlistCardTVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchlistCardTVComponent]
    });
    fixture = TestBed.createComponent(WatchlistCardTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
