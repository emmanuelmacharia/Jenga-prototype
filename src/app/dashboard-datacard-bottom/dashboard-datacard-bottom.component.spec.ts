import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDatacardBottomComponent } from './dashboard-datacard-bottom.component';

describe('DashboardDatacardBottomComponent', () => {
  let component: DashboardDatacardBottomComponent;
  let fixture: ComponentFixture<DashboardDatacardBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDatacardBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDatacardBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
