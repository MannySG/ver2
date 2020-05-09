import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiredOutcomeComponent } from './desired-outcome.component';

describe('DesiredOutcomeComponent', () => {
  let component: DesiredOutcomeComponent;
  let fixture: ComponentFixture<DesiredOutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesiredOutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesiredOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
