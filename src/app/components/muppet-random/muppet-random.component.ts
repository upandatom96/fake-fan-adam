import {Component, OnInit} from "@angular/core";
import {Muppet} from "../../models/Muppet.model";
import {MuppetService} from "../../services/muppet.service";

@Component({
  selector: "app-muppet-random",
  templateUrl: "./muppet-random.component.html",
  styleUrls: ["./muppet-random.component.scss"]
})
export class MuppetRandomComponent implements OnInit {
  public muppet: Muppet = null;

  public get ready(): boolean {
    return this.muppet !== null;
  }

  constructor(
    private muppetService: MuppetService,
  ) {
  }

  public ngOnInit() {
    this.load();
  }

  public load() {
    this.muppet = null;
    this.muppetService.getRandom()
      .subscribe((res) => this.muppet = res,
        (error) => {
          console.log("get single failed");
        });
  }

}
