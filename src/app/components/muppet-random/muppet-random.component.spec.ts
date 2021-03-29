import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MuppetRandomComponent } from "./muppet-random.component";

describe("MuppetRandomComponent", () => {
  let component: MuppetRandomComponent;
  let fixture: ComponentFixture<MuppetRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuppetRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppetRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
