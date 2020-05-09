import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxInfomationComponent } from './tax-infomation.component';

describe('TaxInfomationComponent', () => {
  let component: TaxInfomationComponent;
  let fixture: ComponentFixture<TaxInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
