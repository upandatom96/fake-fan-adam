import { TestBed } from '@angular/core/testing';

import { TunnelGoonService } from './tunnel-goon.service';

describe('TunnelGoonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TunnelGoonService = TestBed.get(TunnelGoonService);
    expect(service).toBeTruthy();
  });
});
