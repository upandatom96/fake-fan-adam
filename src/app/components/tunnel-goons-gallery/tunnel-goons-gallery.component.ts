import {Component, OnInit} from '@angular/core';
import {TunnelGoonService} from "../../services/tunnel-goon.service";
import {TunnelGoon} from "../../models/TunnelGoon.model";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: 'app-tunnel-goons-gallery',
  templateUrl: './tunnel-goons-gallery.component.html',
  styleUrls: ['./tunnel-goons-gallery.component.scss']
})
export class TunnelGoonsGalleryComponent implements OnInit {
  public tunnelGoons: TunnelGoon[] = null;

  constructor(
    private tunnelGoonService: TunnelGoonService,
    private navHelperService: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.load();
  }

  public generate() {
    this.navHelperService.toGoonsGenerator();
  }

  private load() {
    this.tunnelGoonService.getAll()
      .subscribe((res) => this.tunnelGoons = res);
  }

}
