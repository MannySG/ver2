import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatyoudoComponent } from './whatyoudo.component';

describe('WhatyoudoComponent', () => {
  let component: WhatyoudoComponent;
  let fixture: ComponentFixture<WhatyoudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatyoudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatyoudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
