import {Component, OnInit} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  constructor(
    private navHelper: NavHelperService,
    private settings: SettingsService,
  ) {
    this.settings.showNav = true;
  }

  public ngOnInit() {
  }

  public goToInfo() {
    this.navHelper.goToInfo();
  }

  public goBookmarks() {
    this.navHelper.goBookmarks();
  }

  public goToElf() {
    this.navHelper.goToElf();
  }

  public goToMonitor() {
    this.navHelper.goToMonitor();
  }

  public goToMissingWord() {
    this.navHelper.goToMissingWord();
  }

  public goToLinks() {
    this.navHelper.goToLinks();
  }

  public goToScavenger() {
    this.navHelper.goToScavenger();
  }

  public toGoons() {
    this.navHelper.toGoonsGallery();
  }

  public goToMuppets() {
    this.navHelper.goToMuppets();
  }

}
