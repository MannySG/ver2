import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBetterComponent } from './why-better.component';

describe('WhyBetterComponent', () => {
  let component: WhyBetterComponent;
  let fixture: ComponentFixture<WhyBetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyBetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
