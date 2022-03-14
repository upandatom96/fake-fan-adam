import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ModalBoxBasicComponent } from "./modal-box-basic.component";

describe("ModalBoxBasicComponent", () => {
  let component: ModalBoxBasicComponent;
  let fixture: ComponentFixture<ModalBoxBasicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBoxBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBoxBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
