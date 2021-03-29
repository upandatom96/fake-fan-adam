import {Component, OnInit} from "@angular/core";
import {MuppetService} from "../../services/muppet.service";
import {Muppet} from "../../models/Muppet.model";
import {CookieHelper} from "../../utilities/cookie.util";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: "app-muppet-listing",
  templateUrl: "./muppet-listing.component.html",
  styleUrls: ["./muppet-listing.component.scss"]
})
export class MuppetListingComponent implements OnInit {
  public muppets: Muppet[] = null;

  public get ready(): boolean {
    return this.muppets !== null;
  }

  public get isAdmin(): boolean {
    return CookieHelper.admin;
  }

  constructor(
    private muppetService: MuppetService,
    private navHelperService: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.load();
  }

  public add() {
    this.navHelperService.goToMuppetAdd();
  }

  public toRandom() {
    this.navHelperService.goToMuppetRandom();
  }

  public toStats() {
    this.navHelperService.goToMuppetStats();
  }

  public goInfo(muppet: Muppet) {
    this.navHelperService.goToMuppetDisplay(muppet._id);
  }

  public goEdit(muppet: Muppet) {
    this.navHelperService.goToMuppetEdit(muppet._id);
  }

  public requestDelete(muppet: Muppet): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${muppet.name}?`);
    if (confirmDelete) {
      this.delete(muppet);
    }
  }

  private load() {
    this.muppetService.getAll()
      .subscribe((res) => this.muppets = res);
  }

  private delete(muppet: Muppet) {
    let response;
    this.muppetService.delete(muppet._id)
      .subscribe((res) => response = res,
        () => {
        },
        () => {
          this.load();
        });
  }

}
