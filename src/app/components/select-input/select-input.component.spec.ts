import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SelectInputComponent} from "./select-input.component";
import {FormsModule} from "@angular/forms";

describe("SelectInputComponent", () => {
  let component: SelectInputComponent;
  let fixture: ComponentFixture<SelectInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectInputComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
