import {Component, Input} from "@angular/core";

@Component({
  selector: "app-string-list-display",
  templateUrl: "./string-list-display.component.html",
  styleUrls: ["./string-list-display.component.scss"]
})
export class StringListDisplayComponent {
  @Input() public list = [];
}
