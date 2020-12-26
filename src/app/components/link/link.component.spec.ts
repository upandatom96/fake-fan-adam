import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {LinkComponent} from "./link.component";
import {CardComponent} from "../card/card.component";

describe("LinkComponent", () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkComponent, CardComponent, ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
