import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {StringInputComponent} from "./string-input.component";
import {FormsModule} from "@angular/forms";

describe("StringInputComponent", () => {
  let component: StringInputComponent;
  let fixture: ComponentFixture<StringInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StringInputComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
