import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ModalTriggerButtonComponent } from "./modal-trigger-button.component";

describe("ModalTriggerButtonComponent", () => {
  let component: ModalTriggerButtonComponent;
  let fixture: ComponentFixture<ModalTriggerButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTriggerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTriggerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
