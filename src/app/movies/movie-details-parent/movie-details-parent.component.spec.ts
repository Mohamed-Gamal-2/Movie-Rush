import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsParentComponent } from './movie-details-parent.component';

describe('MovieDetailsParentComponent', () => {
  let component: MovieDetailsParentComponent;
  let fixture: ComponentFixture<MovieDetailsParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsParentComponent]
    });
    fixture = TestBed.createComponent(MovieDetailsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
