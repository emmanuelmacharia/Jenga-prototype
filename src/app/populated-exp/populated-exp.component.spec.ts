import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulatedExpComponent } from './populated-exp.component';

describe('PopulatedExpComponent', () => {
  let component: PopulatedExpComponent;
  let fixture: ComponentFixture<PopulatedExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulatedExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulatedExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
