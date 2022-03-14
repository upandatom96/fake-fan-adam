import {Component, OnInit} from '@angular/core';
import {TunnelGoonService} from "../../services/tunnel-goon.service";
import {TunnelGoon} from "../../models/TunnelGoon.model";
import {NavHelperService} from "../../services/nav-helper.service";
import {CookieHelper} from "../../utilities/cookie.util";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tunnel-goons-gallery',
  templateUrl: './tunnel-goons-gallery.component.html',
  styleUrls: ['./tunnel-goons-gallery.component.scss']
})
export class TunnelGoonsGalleryComponent implements OnInit {
  private allTunnelGoons: TunnelGoon[] = null;
  private partyNameRaw: string = null;

  public get ready(): boolean {
    return this.allTunnelGoons !== null;
  }

  public get usePartyName(): boolean {
    return this.partyNameRaw !== null;
  }

  public get uniqueParties(): string[] {
    let partyNames = [];
    this.allTunnelGoons.forEach((tunnelGoon) => {
      tunnelGoon.partyNames.forEach((partyName) => {
        const displayPartyName = TunnelGoonService.displayifyPartyName(partyName);
        const partyNameIsUnique = !partyNames.includes(displayPartyName);
        if (partyNameIsUnique) {
          partyNames.push(displayPartyName);
        }
      });
    });
    return partyNames;
  }

  public get tunnelGoonsToShow(): TunnelGoon[] {
    if (this.usePartyName) {
      return this.allTunnelGoons.filter((tunnelGoon) => {
        if (!tunnelGoon.partyNames) {
          return false;
        } else {
          const tunnelGoonPartyNameCodes = tunnelGoon.partyNames.map((partyName) => {
            return TunnelGoonService.codifyPartyName(partyName);
          });
          return tunnelGoonPartyNameCodes.includes(TunnelGoonService.codifyPartyName(this.partyNameRaw));
        }
      });
    } else {
      return this.allTunnelGoons;
    }
  }

  public get partyNameDisplay(): string {
    if (this.usePartyName) {
      return TunnelGoonService.displayifyPartyName(this.partyNameRaw);
    } else {
      return null;
    }
  }

  public get isLoggedIn(): boolean {
    return CookieHelper.isLoggedOn;
  }

  constructor(
    private tunnelGoonService: TunnelGoonService,
    private navHelperService: NavHelperService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    this.load();
  }

  public generate() {
    this.navHelperService.toGoonsCreate();
  }

  public viewAll() {
    this.navHelperService.toGoonsGallery();
  }

  public viewParty(partyName: string) {
    this.navHelperService.toGoonsGalleryForParty(TunnelGoonService.codifyPartyName(partyName));
  }

  private load() {
    this.partyNameRaw = this.route.snapshot.paramMap.get("partyName");
    this.allTunnelGoons = null;
    this.tunnelGoonService.getAll()
      .subscribe((res) => this.allTunnelGoons = res);
  }

}
