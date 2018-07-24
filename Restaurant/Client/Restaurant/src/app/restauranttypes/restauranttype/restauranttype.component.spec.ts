import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranttypeComponent } from './restauranttype.component';

describe('RestauranttypeComponent', () => {
  let component: RestauranttypeComponent;
  let fixture: ComponentFixture<RestauranttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
