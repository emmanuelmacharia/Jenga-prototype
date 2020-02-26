import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDataTopComponent } from './dash-data-top.component';

describe('DashDataTopComponent', () => {
  let component: DashDataTopComponent;
  let fixture: ComponentFixture<DashDataTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashDataTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashDataTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
