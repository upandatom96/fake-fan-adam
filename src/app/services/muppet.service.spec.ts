import {TestBed} from '@angular/core/testing';

import {MuppetService} from './muppet.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MuppetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: MuppetService = TestBed.get(MuppetService);
    expect(service).toBeTruthy();
  });
});
