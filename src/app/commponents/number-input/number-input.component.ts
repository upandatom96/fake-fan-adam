import {Component, EventEmitter, Input, Output} from "@angular/core";
import {StringHelper} from "../../utilities/string.util";

@Component({
  selector: "app-number-input",
  templateUrl: "./number-input.component.html",
  styleUrls: ["./number-input.component.scss"]
})
export class NumberInputComponent {
  @Input() public valueName = "value-name";
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  public get labelName(): string {
    const spacedName = this.valueName.replace("-", " ");
    return StringHelper.toTitleCase(spacedName);
  }

  public onValueChange() {
    this.valueChange.emit(this.value);
  }

}
