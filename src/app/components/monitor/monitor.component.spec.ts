import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MonitorComponent} from "./monitor.component";
import {HeaderComponent} from "../header/header.component";
import {LoadingComponent} from "../loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CardComponent} from "../card/card.component";
import {BodyComponent} from "../body/body.component";

describe("MonitorComponent", () => {
  let component: MonitorComponent;
  let fixture: ComponentFixture<MonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MonitorComponent, HeaderComponent, LoadingComponent, CardComponent, BodyComponent
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
