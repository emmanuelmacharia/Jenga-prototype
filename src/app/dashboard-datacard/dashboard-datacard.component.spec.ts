import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDatacardComponent } from './dashboard-datacard.component';

describe('DashboardDatacardComponent', () => {
  let component: DashboardDatacardComponent;
  let fixture: ComponentFixture<DashboardDatacardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDatacardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDatacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
