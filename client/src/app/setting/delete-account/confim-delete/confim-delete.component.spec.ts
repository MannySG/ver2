import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimDeleteComponent } from './confim-delete.component';

describe('ConfimDeleteComponent', () => {
  let component: ConfimDeleteComponent;
  let fixture: ComponentFixture<ConfimDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfimDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
