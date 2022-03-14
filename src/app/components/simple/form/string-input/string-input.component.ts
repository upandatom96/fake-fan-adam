import {Component, EventEmitter, Input, Output} from "@angular/core";
import {StringHelper} from "../../../../utilities/string.util";

@Component({
  selector: "app-string-input",
  templateUrl: "./string-input.component.html",
  styleUrls: ["./string-input.component.scss"]
})
export class StringInputComponent {
  @Input() public valueName = "value-name";
  @Input() value: string;
  @Input() showLabel = true;
  @Output() valueChange = new EventEmitter<string>();

  public get labelName(): string {
    return StringHelper.fromHtmlToLabel(this.valueName);
  }

  public onValueChange() {
    this.valueChange.emit(this.value);
  }

}
