import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavHelperService} from "../../services/nav-helper.service";
import {TunnelGoon} from "../../models/TunnelGoon.model";
import {TunnelGoonService} from "../../services/tunnel-goon.service";

@Component({
  selector: 'app-tunnel-goon-details',
  templateUrl: './tunnel-goon-details.component.html',
  styleUrls: ['./tunnel-goon-details.component.scss']
})
export class TunnelGoonDetailsComponent implements OnInit {
  private tunnelGoonId: string = null;
  public tunnelGoon: TunnelGoon = null;

  constructor(
    private route: ActivatedRoute,
    private navHelperService: NavHelperService,
    private tunnelGoonService: TunnelGoonService,
  ) {
  }

  public ngOnInit() {
    this.tunnelGoonId = this.route.snapshot.paramMap.get("id");
    this.tunnelGoonService.getSingle(this.tunnelGoonId)
      .subscribe((res) => this.tunnelGoon = res);
  }

  public toGallery() {
    this.navHelperService.toGoonsGallery();
  }

}
