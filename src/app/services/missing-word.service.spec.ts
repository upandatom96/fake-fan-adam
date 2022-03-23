import {TestBed} from '@angular/core/testing';

import {MissingWordService} from './missing-word.service';

describe('MissingWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissingWordService = TestBed.get(MissingWordService);
    expect(service).toBeTruthy();
  });
});
