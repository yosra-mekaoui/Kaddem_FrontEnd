import { TestBed } from '@angular/core/testing';

import { EquipeServicesService } from './equipe-services.service';

describe('EquipeServicesService', () => {
  let service: EquipeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
