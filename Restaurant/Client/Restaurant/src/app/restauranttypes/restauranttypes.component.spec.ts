import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranttypesComponent } from './restauranttypes.component';

describe('RestauranttypesComponent', () => {
  let component: RestauranttypesComponent;
  let fixture: ComponentFixture<RestauranttypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranttypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
