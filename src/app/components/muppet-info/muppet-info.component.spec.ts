import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MuppetInfoComponent} from "./muppet-info.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {StringListDisplayComponent} from "../simple/string-list-display/string-list-display.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("MuppetInfoComponent", () => {
  let component: MuppetInfoComponent;
  let fixture: ComponentFixture<MuppetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuppetInfoComponent, LoadingComponent, StringListDisplayComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
