import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrateBankComponent } from './integrate-bank.component';

describe('IntegrateBankComponent', () => {
  let component: IntegrateBankComponent;
  let fixture: ComponentFixture<IntegrateBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrateBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrateBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
