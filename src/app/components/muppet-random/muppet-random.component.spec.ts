import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MuppetRandomComponent} from "./muppet-random.component";
import {MuppetInfoComponent} from "../muppet-info/muppet-info.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {StringListDisplayComponent} from "../simple/string-list-display/string-list-display.component";

describe("MuppetRandomComponent", () => {
  let component: MuppetRandomComponent;
  let fixture: ComponentFixture<MuppetRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MuppetRandomComponent, MuppetInfoComponent, LoadingComponent, StringListDisplayComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
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
