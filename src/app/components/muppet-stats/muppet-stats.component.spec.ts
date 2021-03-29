import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MuppetStatsComponent } from "./muppet-stats.component";

describe("MuppetStatsComponent", () => {
  let component: MuppetStatsComponent;
  let fixture: ComponentFixture<MuppetStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuppetStatsComponent ]
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
