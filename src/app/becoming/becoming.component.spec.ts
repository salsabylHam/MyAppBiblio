import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomingComponent } from './becoming.component';

describe('BecomingComponent', () => {
  let component: BecomingComponent;
  let fixture: ComponentFixture<BecomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomingComponent]
    });
    fixture = TestBed.createComponent(BecomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
