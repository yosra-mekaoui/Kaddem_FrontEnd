import { TestBed } from '@angular/core/testing';

import { ServiceUniversiteService } from './service-universite.service';

describe('ServiceUniversiteService', () => {
  let service: ServiceUniversiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUniversiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
