import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicComponent } from './atomic.component';

describe('AtomicComponent', () => {
  let component: AtomicComponent;
  let fixture: ComponentFixture<AtomicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomicComponent]
    });
    fixture = TestBed.createComponent(AtomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
