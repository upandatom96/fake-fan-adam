import {Component, EventEmitter, Input, Output} from "@angular/core";
import {StringHelper} from "../../utilities/string.util";
import {BooleanHelper} from "../../utilities/boolean.util";

@Component({
  selector: "app-string-list-input",
  templateUrl: "./string-list-input.component.html",
  styleUrls: ["./string-list-input.component.scss"]
})
export class StringListInputComponent {
  @Input() public valueName = "value-name";
  @Input() value: string[];
  @Output() valueChange = new EventEmitter<string[]>();

  public nextItem: string = null;

  public get labelName(): string {
    return StringHelper.fromHtmlToLabel(this.valueName);
  }

  public get noItem(): boolean {
    return BooleanHelper.hasNoValue(this.nextItem);
  }

  public get duplicateItem(): boolean {
    return BooleanHelper.hasValue(this.nextItem) && this.value.includes(this.nextItem);
  }

  public get disableAdd(): boolean {
    return this.noItem || this.duplicateItem;
  }

  public addNextItem() {
    this.value.push(this.nextItem);
    this.nextItem = null;
    this.onValueChange();
  }

  public removeItem(index: number) {
    this.value.splice(index, 1);
    this.onValueChange();
  }

  public onValueChange() {
    this.valueChange.emit(this.value);
  }

}
