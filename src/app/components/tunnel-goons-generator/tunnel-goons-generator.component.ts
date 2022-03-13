import {Component, OnInit} from '@angular/core';
import {TunnelGoonService} from "../../services/tunnel-goon.service";
import {NavHelperService} from "../../services/nav-helper.service";
import {TunnelGoonOptions} from "../../models/TunnelGoon.model";

@Component({
  selector: 'app-tunnel-goons-generator',
  templateUrl: './tunnel-goons-generator.component.html',
  styleUrls: ['./tunnel-goons-generator.component.scss']
})
export class TunnelGoonsGeneratorComponent implements OnInit {
  public tunnelGoonOptions: TunnelGoonOptions = null;

  constructor(
    private tunnelGoonService: TunnelGoonService,
    private navHelperService: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.tunnelGoonOptions = {
      playerName: null,
      characterName: null,
      portraitURL: null,
      cloakColor: null,
      choiceItem: null,
      childhoodCode: null,
      professionCode: null,
      duringTheWarCode: null,
    };
  }

  public runGenerator() {
    this.tunnelGoonService.createOne(this.tunnelGoonOptions)
      .subscribe((res) => this.navHelperService.toGoonDetails(res._id));
  }

}
