import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TunnelGoon} from "../../models/TunnelGoon.model";
import {NavHelperService} from "../../services/nav-helper.service";
import {TunnelGoonService} from "../../services/tunnel-goon.service";
import {CookieHelper} from "../../utilities/cookie.util";

@Component({
  selector: 'app-tunnel-goon-card',
  templateUrl: './tunnel-goon-card.component.html',
  styleUrls: ['./tunnel-goon-card.component.scss']
})
export class TunnelGoonCardComponent {
  @Input() public tunnelGoon: TunnelGoon = null;
  @Input() public showingMultiple: boolean = false;
  @Input() public showAll: boolean = false;
  @Output() public refreshData = new EventEmitter<string>();

  public editModeActive = false;

  public get hasErrors(): boolean {
    return this.errors.length > 0;
  }

  public get errors(): string[] {
    const _errors = [];
    if (this.hasCharacterNameError) {
      _errors.push("Please enter a character name.");
    }
    return _errors;
  }

  private get hasCharacterNameError(): boolean {
    return !this.tunnelGoon.characterName || this.tunnelGoon.characterName.length === 0;
  }

  public get border(): string {
    return this.editModeActive ? "border-warning" : "border-primary";
  }

  public get isLoggedIn(): boolean {
    return CookieHelper.isLoggedOn;
  }

  constructor(
    private navHelperService: NavHelperService,
    private tunnelGoonService: TunnelGoonService,
  ) {
  }

  public toDetails() {
    this.navHelperService.toGoonDetails(this.tunnelGoon._id);
  }

  public turnEditOn() {
    this.editModeActive = true;
  }

  public turnEditOff() {
    this.editModeActive = false;
    this.refreshData.emit("");
  }

  public toDelete() {
    if (confirm(`Are you sure you want to delete ${this.tunnelGoon.characterName}?`)) {
      this.tunnelGoonService.deleteOne(this.tunnelGoon._id)
        .subscribe(() => {
          this.concludeDelete();
        });
    }
  }

  public saveEdit() {
    this.tunnelGoonService.editOne(this.tunnelGoon)
      .subscribe(() => {
        this.turnEditOff();
      });
  }

  private concludeDelete() {
    this.refreshData.emit("");
    this.navHelperService.toGoonsGallery()
  }
}
