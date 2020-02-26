import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDatacardNavComponent } from './dashboard-datacard-nav.component';

describe('DashboardDatacardNavComponent', () => {
  let component: DashboardDatacardNavComponent;
  let fixture: ComponentFixture<DashboardDatacardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDatacardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDatacardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
