import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SuperlativeScavengerComponent} from "./superlative-scavenger.component";
import {LoadingComponent} from "../simple/loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("SuperlativeScavengerComponent", () => {
  let component: SuperlativeScavengerComponent;
  let fixture: ComponentFixture<SuperlativeScavengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuperlativeScavengerComponent, LoadingComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperlativeScavengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
