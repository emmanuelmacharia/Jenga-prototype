import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDataBottomComponent } from './dash-data-bottom.component';

describe('DashDataBottomComponent', () => {
  let component: DashDataBottomComponent;
  let fixture: ComponentFixture<DashDataBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashDataBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashDataBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
