import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFeedbackComponent } from './confirm-feedback.component';

describe('ConfirmFeedbackComponent', () => {
  let component: ConfirmFeedbackComponent;
  let fixture: ComponentFixture<ConfirmFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
