import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgeComponent } from './george.component';

describe('GeorgeComponent', () => {
  let component: GeorgeComponent;
  let fixture: ComponentFixture<GeorgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeorgeComponent]
    });
    fixture = TestBed.createComponent(GeorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
