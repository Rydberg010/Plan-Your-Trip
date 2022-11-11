import { TestBed } from '@angular/core/testing';

import { HotelPackService } from './hotel-pack.service';

describe('HotelPackService', () => {
  let service: HotelPackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelPackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
