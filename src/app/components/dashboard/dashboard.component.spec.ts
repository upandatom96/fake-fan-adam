import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { RouterTestingModule } from "@angular/router/testing";
import { BodyComponent } from "../body/body.component";
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../simple/card/card.component";
import { BodyAltComponent } from "../body-alt/body-alt.component";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent, BodyComponent, HeaderComponent, CardComponent,
        BodyAltComponent
      ],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
