import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestComponent } from './lastest.component';

describe('LastestComponent', () => {
  let component: LastestComponent;
  let fixture: ComponentFixture<LastestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastestComponent]
    });
    fixture = TestBed.createComponent(LastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
