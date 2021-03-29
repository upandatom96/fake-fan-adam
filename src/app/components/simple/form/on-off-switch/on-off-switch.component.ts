import {Component, EventEmitter, Input, Output} from "@angular/core";
import {StringHelper} from "../../../../utilities/string.util";

@Component({
  selector: "app-on-off-switch",
  templateUrl: "./on-off-switch.component.html",
  styleUrls: ["./on-off-switch.component.scss"]
})
export class OnOffSwitchComponent {
  @Input() public valueName = "value-name";
  @Input() value: boolean;
  @Output() valueChange = new EventEmitter<boolean>();

  public get labelName(): string {
    return StringHelper.fromHtmlToLabel(this.valueName);
  }

  public get isOn(): boolean {
    return this.value;
  }

  public get isOff(): boolean {
    return !this.value;
  }

  public turnOn() {
    this.value = true;
    this.onValueChange();
  }

  public turnOff() {
    this.value = false;
    this.onValueChange();
  }

  private onValueChange() {
    this.valueChange.emit(this.value);
  }

}
