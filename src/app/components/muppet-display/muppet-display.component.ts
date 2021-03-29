import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MuppetService} from "../../services/muppet.service";
import {Muppet} from "../../models/Muppet.model";

@Component({
  selector: "app-muppet-display",
  templateUrl: "./muppet-display.component.html",
  styleUrls: ["./muppet-display.component.scss"]
})
export class MuppetDisplayComponent implements OnInit {
  public muppet: Muppet = null;
  private muppetId: string = null;

  public get ready(): boolean {
    return this.muppetId !== null && this.muppet !== null;
  }

  constructor(
    private route: ActivatedRoute,
    private muppetService: MuppetService,
  ) {
  }

  public ngOnInit() {
    this.load();
  }

  private load() {
    this.muppetId = this.route.snapshot.paramMap.get("id");
    this.muppetService.getSingle(this.muppetId)
      .subscribe((res) => this.muppet = res,
        (error) => {
          console.log("get single failed");
        });
  }

}
