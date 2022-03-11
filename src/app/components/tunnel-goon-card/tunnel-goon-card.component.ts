import {Component, Input} from '@angular/core';
import {TunnelGoon} from "../../models/TunnelGoon.model";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
  selector: 'app-tunnel-goon-card',
  templateUrl: './tunnel-goon-card.component.html',
  styleUrls: ['./tunnel-goon-card.component.scss']
})
export class TunnelGoonCardComponent {
  @Input() public tunnelGoon: TunnelGoon = null;
  @Input() public showNav: boolean = false;
  @Input() public showAll: boolean = false;

  constructor(
    private navHelperService: NavHelperService,
  ) {
  }

  public toDetails() {
    this.navHelperService.toGoonDetails(this.tunnelGoon._id);
  }
}
