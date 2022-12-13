import { TestBed } from '@angular/core/testing';

import { ServiceExperienceService } from './service-experience.service';

describe('ServiceExperienceService', () => {
  let service: ServiceExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
