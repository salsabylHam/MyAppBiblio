import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookthiefComponent } from './bookthief.component';

describe('BookthiefComponent', () => {
  let component: BookthiefComponent;
  let fixture: ComponentFixture<BookthiefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookthiefComponent]
    });
    fixture = TestBed.createComponent(BookthiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
