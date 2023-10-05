import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistPatentComponent } from './watchlist-patent.component';

describe('WatchlistPatentComponent', () => {
  let component: WatchlistPatentComponent;
  let fixture: ComponentFixture<WatchlistPatentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchlistPatentComponent]
    });
    fixture = TestBed.createComponent(WatchlistPatentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
