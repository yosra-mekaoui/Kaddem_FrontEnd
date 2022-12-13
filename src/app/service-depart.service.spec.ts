import { TestBed } from '@angular/core/testing';

import { ServiceDepartService } from './service-depart.service';

describe('ServiceDepartService', () => {
  let service: ServiceDepartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDepartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
