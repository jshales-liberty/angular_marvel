import { TestBed, inject } from '@angular/core/testing';

import { MarvelServiceService } from './marvel-service.service';

describe('MarvelServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarvelServiceService]
    });
  });

  it('should be created', inject([MarvelServiceService], (service: MarvelServiceService) => {
    expect(service).toBeTruthy();
  }));
});
