import {Component, OnInit} from "@angular/core";
import {MuppetService} from "../../services/muppet.service";
import {MuppetStats} from "../../models/MuppetStats.model";

@Component({
  selector: "app-muppet-stats",
  templateUrl: "./muppet-stats.component.html",
  styleUrls: ["./muppet-stats.component.scss"]
})
export class MuppetStatsComponent implements OnInit {
  public muppetStats: MuppetStats = null;

  public get ready(): boolean {
    return this.muppetStats !== null;
  }

  constructor(
    private muppetService: MuppetService,
  ) {
  }

  public ngOnInit() {
    this.load();
  }

  private load() {
    this.muppetService.getStats()
      .subscribe((res) => this.muppetStats = res);
  }

}
