import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {StringListInputComponent} from "./string-list-input.component";
import {FormsModule} from "@angular/forms";

describe("StringListInputComponent", () => {
  let component: StringListInputComponent;
  let fixture: ComponentFixture<StringListInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StringListInputComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
