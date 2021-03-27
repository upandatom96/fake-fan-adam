import {Component, EventEmitter, Input, Output} from "@angular/core";
import {StringHelper} from "../../utilities/string.util";

@Component({
  selector: "app-select-input",
  templateUrl: "./select-input.component.html",
  styleUrls: ["./select-input.component.scss"]
})
export class SelectInputComponent {
  @Input() public valueName = "value-name";
  @Input() value: string;
  @Input() options: string[] = null;
  @Output() valueChange = new EventEmitter<string>();

  public get labelName(): string {
    return StringHelper.fromHtmlToLabel(this.valueName);
  }

  public onValueChange() {
    this.valueChange.emit(this.value);
  }

}
