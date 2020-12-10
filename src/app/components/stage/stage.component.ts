import {Component, OnInit} from "@angular/core";
import {ImageService} from "../../services/image.service";
import {DetailedImage} from "../../models/DetailedImage.model";
import {DomHelper} from "../../utilities/dom.util";
import {RandomHelper} from "../../utilities/random.util";
import {SettingsService} from "../../services/settings.service";

@Component({
  selector: "app-stage",
  templateUrl: "./stage.component.html",
  styleUrls: ["./stage.component.scss"]
})
export class StageComponent implements OnInit {
  public characters: DetailedImage[] = null;
  public backgrounds: DetailedImage[] = null;

  public character: DetailedImage = null;
  public background: DetailedImage = null;

  public get ready(): boolean {
    return this.characters !== null && this.backgrounds !== null &&
      this.character !== null && this.background !== null;
  }

  constructor(
    private imageService: ImageService,
    private settingsService: SettingsService,
  ) {
  }

  public ngOnInit() {
    this.settingsService.showNav = false;
    this.loadAssets();
  }

  private loadAssets() {
    let assets: DetailedImage[] = null;
    this.imageService.loadAssetsOnline()
      .subscribe((res) => assets = res,
        (error) => {
          console.log("NO ASSETS AVAILABLE");
        }, () => {
          console.log("loading online assets...");
          this.applyAssets(assets);
        });
  }

  private applyAssets(assets: DetailedImage[]) {
    this.setAssetSource(assets);
    this.sortAssets(assets);
    this.setScene();
  }

  private setAssetSource(assets: DetailedImage[]) {
    const path = "https://blissful-newton-edf9e2.netlify.app/assets";
    assets.forEach((asset) => {
      asset.src = path + asset.src;
    });
  }

  private sortAssets(assets: DetailedImage[]) {
    this.characters = assets.filter((asset) => {
      return asset.tags.includes("friend");
    });
    console.log("LOADED " + this.characters.length + " character(s)");
    this.backgrounds = assets.filter((asset) => {
      return asset.tags.includes("background");
    });
    console.log("LOADED " + this.backgrounds.length + " background(s)");
  }

  public setScene() {
    this.character = null;
    const selectedCharacter = RandomHelper.shuffle(this.characters)[0];
    this.setupCharacter(selectedCharacter);

    this.background = null;
    const selectedBackground = RandomHelper.shuffle(this.backgrounds)[0];
    this.setupLocation(selectedBackground);
    console.log(`${selectedCharacter.name} on the ${selectedBackground.name}`);
  }

  private setupCharacter(character: DetailedImage): void {
    this.character = character;
  }

  private setupLocation(location: DetailedImage): void {
    this.background = location;
    DomHelper.setBackground(location.src);
  }

}
