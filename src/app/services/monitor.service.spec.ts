import {TestBed} from "@angular/core/testing";

import {MonitorService} from "./monitor.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("MonitorService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));
  it("should be created", () => {
    const service: MonitorService = TestBed.get(MonitorService);
    expect(service).toBeTruthy();
  });
});
