import {Component, OnInit} from '@angular/core';
import {TunnelGoonService} from "../../services/tunnel-goon.service";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: 'app-tunnel-goons-generator',
  templateUrl: './tunnel-goons-generator.component.html',
  styleUrls: ['./tunnel-goons-generator.component.scss']
})
export class TunnelGoonsGeneratorComponent implements OnInit {

  constructor(
    private tunnelGoonService: TunnelGoonService,
    private navHelperService: NavHelperService,
  ) {
  }

  public ngOnInit() {
  }

  public runGenerator() {
    this.tunnelGoonService.createOne()
      .subscribe((res) => this.navHelperService.toGoonDetails(res._id));
  }

}
