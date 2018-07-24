import { TestBed, inject } from '@angular/core/testing';

import { RestauranttypeService } from './restauranttype.service';

describe('RestauranttypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestauranttypeService]
    });
  });

  it('should be created', inject([RestauranttypeService], (service: RestauranttypeService) => {
    expect(service).toBeTruthy();
  }));
});
