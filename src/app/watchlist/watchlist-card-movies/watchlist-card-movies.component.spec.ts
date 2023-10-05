import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistCardMoviesComponent } from './watchlist-card-movies.component';

describe('WatchlistCardMoviesComponent', () => {
  let component: WatchlistCardMoviesComponent;
  let fixture: ComponentFixture<WatchlistCardMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchlistCardMoviesComponent]
    });
    fixture = TestBed.createComponent(WatchlistCardMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
