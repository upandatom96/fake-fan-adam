import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-muppet-display",
  templateUrl: "./muppet-display.component.html",
  styleUrls: ["./muppet-display.component.scss"]
})
export class MuppetDisplayComponent implements OnInit {
  public muppetId: string = null;

  public get ready(): boolean {
    return this.muppetId !== null;
  }

  constructor(
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.load();
  }

  private load() {
    this.muppetId = this.route.snapshot.paramMap.get("id");
  }

}
