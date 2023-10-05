import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsChildComponent } from './movie-details-child.component';

describe('MovieDetailsChildComponent', () => {
  let component: MovieDetailsChildComponent;
  let fixture: ComponentFixture<MovieDetailsChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsChildComponent]
    });
    fixture = TestBed.createComponent(MovieDetailsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
