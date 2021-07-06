/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuppliersApiService } from './suppliers-api.service';

describe('Service: SuppliersApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuppliersApiService]
    });
  });

  it('should ...', inject([SuppliersApiService], (service: SuppliersApiService) => {
    expect(service).toBeTruthy();
  }));
});
