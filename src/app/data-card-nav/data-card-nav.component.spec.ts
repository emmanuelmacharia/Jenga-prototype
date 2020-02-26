import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardNavComponent } from './data-card-nav.component';

describe('DataCardNavComponent', () => {
  let component: DataCardNavComponent;
  let fixture: ComponentFixture<DataCardNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCardNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
