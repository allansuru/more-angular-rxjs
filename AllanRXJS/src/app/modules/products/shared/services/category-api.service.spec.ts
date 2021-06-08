/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryApiService } from './category-api.service';

describe('Service: CategoryApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryApiService]
    });
  });

  it('should ...', inject([CategoryApiService], (service: CategoryApiService) => {
    expect(service).toBeTruthy();
  }));
});
