import {Component, OnInit} from '@angular/core';
import {MissingWordService} from "../../services/missing-word.service";
import {MissingWord} from "../../models/MissingWord.model";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: 'app-missing-word',
  templateUrl: './missing-word.component.html',
  styleUrls: ['./missing-word.component.scss']
})
export class MissingWordComponent implements OnInit {
  public missingWord: MissingWord = null;

  public get isWordReady(): boolean {
    return this.missingWord !== null;
  }

  constructor(
    private missingWordService: MissingWordService,
    private settingsService: SettingsService,
  ) {
    this.settingsService.showNav = false;
  }

  public ngOnInit() {
    this.drawCard();
  }

  public drawCard(): void {
    this.missingWord = null;
    this.missingWordService.drawCard()
      .subscribe((res) => this.missingWord = res);
  }

}
