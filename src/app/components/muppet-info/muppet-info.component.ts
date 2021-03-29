import {Component, Input} from "@angular/core";
import {Muppet} from "../../models/Muppet.model";
import {CookieHelper} from "../../utilities/cookie.util";
import {ActivatedRoute} from "@angular/router";
import {MuppetService} from "../../services/muppet.service";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: "app-muppet-info",
  templateUrl: "./muppet-info.component.html",
  styleUrls: ["./muppet-info.component.scss"]
})
export class MuppetInfoComponent {
  @Input() public muppet: Muppet = null;

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

}
