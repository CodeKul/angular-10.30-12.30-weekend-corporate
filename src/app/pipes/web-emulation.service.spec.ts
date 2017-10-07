import { TestBed, inject } from '@angular/core/testing';

import { WebEmulationService } from './web-emulation.service';

describe('WebEmulationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebEmulationService]
    });
  });

  it('should be created', inject([WebEmulationService], (service: WebEmulationService) => {
    expect(service).toBeTruthy();
  }));
});
