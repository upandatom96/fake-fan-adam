import {TestBed} from "@angular/core/testing";

import {SuperlativeScavengerService} from "./superlative-scavenger.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("SuperlativeScavengerService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it("should be created", () => {
    const service: SuperlativeScavengerService = TestBed.get(SuperlativeScavengerService);
    expect(service).toBeTruthy();
  });
});
