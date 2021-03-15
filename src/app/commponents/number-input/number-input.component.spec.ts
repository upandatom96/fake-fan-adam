import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {NumberInputComponent} from "./number-input.component";
import {FormsModule} from "@angular/forms";

describe("NumberInputComponent", () => {
  let component: NumberInputComponent;
  let fixture: ComponentFixture<NumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumberInputComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
