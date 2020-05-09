import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateConfirmComponent } from './deactivate-confirm.component';

describe('DeactivateConfirmComponent', () => {
  let component: DeactivateConfirmComponent;
  let fixture: ComponentFixture<DeactivateConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
