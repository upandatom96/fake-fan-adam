import {Component, OnInit} from "@angular/core";
import {SuperlativeScavengerService} from "../../services/superlative-scavenger.service";

@Component({
  selector: "app-superlative-scavenger",
  templateUrl: "./superlative-scavenger.component.html",
  styleUrls: ["./superlative-scavenger.component.scss"]
})
export class SuperlativeScavengerComponent implements OnInit {
  public phrase: string = null;

  public get ready(): boolean {
    return this.phrase !== null;
  }

  constructor(
    private superlativeScavengerService: SuperlativeScavengerService,
  ) {
  }

  public ngOnInit() {
    this.loadPhrase();
  }

  public loadPhrase() {
    this.phrase = null;
    this.superlativeScavengerService.getOne()
      .subscribe((res) => this.phrase = res.phrase);
  }
}
