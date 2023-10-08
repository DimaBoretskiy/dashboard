import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedComponent } from './requested.component';

describe('RequestedComponent', () => {
  let component: RequestedComponent;
  let fixture: ComponentFixture<RequestedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestedComponent]
    });
    fixture = TestBed.createComponent(RequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
