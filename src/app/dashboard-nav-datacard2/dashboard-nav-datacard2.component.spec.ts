import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavDatacard2Component } from './dashboard-nav-datacard2.component';

describe('DashboardNavDatacard2Component', () => {
  let component: DashboardNavDatacard2Component;
  let fixture: ComponentFixture<DashboardNavDatacard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNavDatacard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNavDatacard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
