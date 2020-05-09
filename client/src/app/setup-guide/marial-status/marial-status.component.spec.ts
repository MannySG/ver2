import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarialStatusComponent } from './marial-status.component';

describe('MarialStatusComponent', () => {
  let component: MarialStatusComponent;
  let fixture: ComponentFixture<MarialStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarialStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarialStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
