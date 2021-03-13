import {Component, OnInit} from '@angular/core';
import {MuppetService} from "../../services/muppet.service";
import {Muppet} from "../../models/Muppet.model";
import {CookieHelper} from "../../utilities/cookie.util";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: 'app-muppet-listing',
  templateUrl: './muppet-listing.component.html',
  styleUrls: ['./muppet-listing.component.scss']
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
    this.muppetService.getAll()
      .subscribe((res) => this.muppets = res);
  }

  public add() {
    this.navHelperService.goToMuppetAdd();
  }

}
