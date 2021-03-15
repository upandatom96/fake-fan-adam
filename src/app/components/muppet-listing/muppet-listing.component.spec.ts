import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MuppetListingComponent} from "./muppet-listing.component";
import {LoadingComponent} from "../loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("MuppetListingComponent", () => {
  let component: MuppetListingComponent;
  let fixture: ComponentFixture<MuppetListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuppetListingComponent, LoadingComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppetListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
