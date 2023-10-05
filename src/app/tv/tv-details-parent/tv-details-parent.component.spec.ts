import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVDetailsParentComponent } from './tv-details-parent.component';

describe('TVDetailsParentComponent', () => {
  let component: TVDetailsParentComponent;
  let fixture: ComponentFixture<TVDetailsParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVDetailsParentComponent]
    });
    fixture = TestBed.createComponent(TVDetailsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
