import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranttypeListComponent } from './restauranttype-list.component';

describe('RestauranttypeListComponent', () => {
  let component: RestauranttypeListComponent;
  let fixture: ComponentFixture<RestauranttypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranttypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranttypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
