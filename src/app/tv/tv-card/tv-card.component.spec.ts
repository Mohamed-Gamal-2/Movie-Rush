import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVCardComponent } from './tv-card.component';

describe('TVCardComponent', () => {
  let component: TVCardComponent;
  let fixture: ComponentFixture<TVCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVCardComponent]
    });
    fixture = TestBed.createComponent(TVCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
