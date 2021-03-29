import {Component, EventEmitter, Input, Output} from "@angular/core";
import {StringHelper} from "../../../../utilities/string.util";
import {BooleanHelper} from "../../../../utilities/boolean.util";

@Component({
  selector: "app-number-input",
  templateUrl: "./number-input.component.html",
  styleUrls: ["./number-input.component.scss"]
})
export class NumberInputComponent {
  @Input() public valueName = "value-name";
  @Input() public min = 0;
  @Input() public max = 10;
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  public get hasMin(): boolean {
    return BooleanHelper.hasValue(this.min);
  }

  public get hasMax(): boolean {
    return BooleanHelper.hasValue(this.max);
  }

  public get hasMinOrMax(): boolean {
    return this.hasMin || this.hasMax;
  }

  public get hasMinAndMax(): boolean {
    return this.hasMin && this.hasMax;
  }

  public get tip(): string {
    if (this.hasMinAndMax) {
      return `(min ${this.min}, max ${this.max})`;
    } else if (this.hasMin) {
      return `(min ${this.min})`;
    } else if (this.hasMax) {
      return `(max ${this.max})`;
    } else {
      return "";
    }
  }

  public get labelName(): string {
    return StringHelper.fromHtmlToLabel(this.valueName);
  }

  public onValueChange() {
    this.valueChange.emit(this.value);
  }

}
