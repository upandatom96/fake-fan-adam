import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MuppetService} from "../../services/muppet.service";
import {NavHelperService} from "../../services/nav-helper.service";
import {Muppet} from "../../models/Muppet.model";
import {CookieHelper} from "../../utilities/cookie.util";

@Component({
  selector: "app-muppet-display",
  templateUrl: "./muppet-display.component.html",
  styleUrls: ["./muppet-display.component.scss"]
})
export class MuppetDisplayComponent implements OnInit {
  public muppet: Muppet = null;

  public get ready(): boolean {
    return this.muppet !== null;
  }

  public get isAdmin(): boolean {
    return CookieHelper.admin;
  }

  constructor(
    private route: ActivatedRoute,
    private muppetService: MuppetService,
    private navHelper: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.load();
  }

  public requestDelete(): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${this.muppet.name}?`);
    if (confirmDelete) {
      this.delete();
    }
  }

  public edit() {
    this.navHelper.goToMuppetEdit(this.muppet._id);
  }

  private delete() {
    let response;
    this.muppetService.delete(this.muppet._id)
      .subscribe((res) => response = res,
        () => {
        },
        () => {
          this.navHelper.goToMuppets();
        });
  }

  private load() {
    const muppetId = this.route.snapshot.paramMap.get("id");
    this.muppetService.getSingle(muppetId)
      .subscribe((res) => this.muppet = res,
        (error) => {
          console.log("get single failed");
        });
  }

}
