import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVDetailsCildComponent } from './tv-details-cild.component';

describe('TVDetailsCildComponent', () => {
  let component: TVDetailsCildComponent;
  let fixture: ComponentFixture<TVDetailsCildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVDetailsCildComponent]
    });
    fixture = TestBed.createComponent(TVDetailsCildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
