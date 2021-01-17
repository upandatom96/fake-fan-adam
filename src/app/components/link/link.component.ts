import {Component, OnInit} from "@angular/core";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: "app-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"]
})
export class LinkComponent {
  public links = [
    {
      title: "Adam on the Internet",
      subtitle: "my professional site",
      link: "http://www.adamontheinternet.com/dashboard",
      faIcon: "fa fa-laptop",
    },
    {
      title: "My App Hub",
      subtitle: "a showcase for all my apps",
      link: "https://adam-on-the-internet.github.io/app-hub",
      faIcon: "fa fa-cubes",
    },
    {
      title: "My Twitter Accounts",
      subtitle: "a list of my professional accounts & bots",
      link: "https://twitter.com/i/lists/1330358452061949952",
      faIcon: "fa fa-twitter",
    },
    {
      title: "Order in the Court",
      subtitle: "a story-building improv game for 3+ players",
      link: "https://order-in-the-court-app.herokuapp.com/",
      faIcon: "fa fa-gavel",
    },
    {
      title: "Vaudeville Mews Archive",
      subtitle: "archived show data",
      link: "https://adam-on-the-internet.github.io/vaudeville-mews-archive",
      faIcon: "fa fa-music",
    },
  ];

  constructor(
    private settings: SettingsService,
  ) {
    this.settings.showNav = false;
  }

}
