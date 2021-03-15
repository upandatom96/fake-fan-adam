import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MuppetFormComponent} from "./muppet-form.component";
import {FormsModule} from "@angular/forms";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";
import {LoadingComponent} from "../loading/loading.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("MuppetFormComponent", () => {
  let component: MuppetFormComponent;
  let fixture: ComponentFixture<MuppetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuppetFormComponent, CardComponent, BodyComponent, LoadingComponent],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
