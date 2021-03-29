import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MuppetStatsComponent} from "./muppet-stats.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("MuppetStatsComponent", () => {
  let component: MuppetStatsComponent;
  let fixture: ComponentFixture<MuppetStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuppetStatsComponent, LoadingComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppetStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
