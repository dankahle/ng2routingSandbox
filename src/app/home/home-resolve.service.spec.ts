/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeResolveService } from './home-resolve.service';

describe('Service: HomeResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeResolveService]
    });
  });

  it('should ...', inject([HomeResolveService], (service: HomeResolveService) => {
    expect(service).toBeTruthy();
  }));
});
