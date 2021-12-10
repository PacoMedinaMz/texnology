import { TestBed } from '@angular/core/testing';

import { ServicioPDFService } from './servicio-pdf.service';

describe('ServicioPDFService', () => {
  let service: ServicioPDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
