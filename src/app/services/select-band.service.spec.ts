import { TestBed, inject } from '@angular/core/testing';

import { SelectBandService } from './services/select-band.service';

describe('SelectBandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectBandService]
    });
  });

  it('should be created', inject([SelectBandService], (service: SelectBandService) => {
    expect(service).toBeTruthy();
  }));
});
