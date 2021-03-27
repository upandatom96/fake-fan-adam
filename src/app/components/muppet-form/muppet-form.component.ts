import {Component, OnInit} from "@angular/core";
import {BooleanHelper} from "../../utilities/boolean.util";
import {ActivatedRoute} from "@angular/router";
import {NavHelperService} from "../../services/nav-helper.service";
import {Muppet} from "../../models/Muppet.model";
import {MuppetService} from "../../services/muppet.service";

@Component({
  selector: "app-muppet-form",
  templateUrl: "./muppet-form.component.html",
  styleUrls: ["./muppet-form.component.scss"]
})
export class MuppetFormComponent implements OnInit {
  public muppet: Muppet = null;
  public showErrors = false;

  public COMMONALITIES = ["COMMON", "UNCOMMON", "RARE"];
  public SPEECH_TYPES = ["ENGLISH", "GIBBERISH", "NONE"];
  public ALIGNMENTS = [
    "LAWFUL GOOD", "NEUTRAL GOOD", "CHAOTIC GOOD",
    "LAWFUL NEUTRAL", "TRUE NEUTRAL", "CHAOTIC NEUTRAL",
    "LAWFUL EVIL", "NEUTRAL EVIL", "CHAOTIC EVIL",
    "UNALIGNED",
  ];

  public get title(): string {
    if (this.editMode) {
      return "Edit Muppet";
    }
    return "Create Muppet";
  }

  public get currentYear(): number {
    return new Date().getFullYear();
  }

  private muppetStats = [
    "starQuality",
    "friendliness",
    "imagination",
    "showmanship",
    "humor",
    "absentmindedness",
    "mischief",
    "floppiness",
    "passion",
    "softness",
  ];
  private dndStats = [
    "strength",
    "dexterity",
    "wisdom",
    "intelligence",
    "constitution",
    "charisma",
  ];

  public get errors(): string[] {
    const myErrors = [];
    if (BooleanHelper.hasNoValue(this.muppet.name)) {
      myErrors.push("Please provide a name.");
    }
    if (BooleanHelper.hasNoValue(this.muppet.creature)) {
      myErrors.push("Please provide a creature.");
    }
    if (BooleanHelper.hasNoValue(this.muppet.mainSeries)) {
      myErrors.push("Please provide a main series.");
    }
    if (BooleanHelper.notInRange(this.muppet.debutYear, 1995, this.currentYear)) {
      myErrors.push(`Please provide a debut year, must be 1995-${this.currentYear}.`);
    }
    if (BooleanHelper.notInRange(this.muppet.muppetRank, 0, 100)) {
      myErrors.push("Please provide a muppet rank.");
    }
    this.muppetStats.forEach((stat) => {
      if (this.muppet[stat] && (this.muppet[stat] < 0 || this.muppet[stat] > 10)) {
        myErrors.push(`Invalid muppet stat ${stat}, must be 0-10.`);
      }
    });
    this.dndStats.forEach((stat) => {
      if (this.muppet[stat] && (this.muppet[stat] < 0 || this.muppet[stat] > 10)) {
        myErrors.push(`Invalid dnd stat ${stat}, must be 0-10.`);
      }
    });
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.muppet);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.hasValue(this.muppet._id);
  }

  constructor(
    private route: ActivatedRoute,
    private muppetService: MuppetService,
    private navHelper: NavHelperService,
  ) {
  }

  public ngOnInit() {
    this.setupForm();
  }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.save();
    }
  }

  private save() {
    if (this.editMode) {
      this.runEdit();
    } else {
      this.runCreate();
    }
  }

  private runEdit() {
    let response;
    this.muppetService.update(this.muppet)
      .subscribe((res) => response = res,
        (error) => {
          console.log("update failed");
        }, () => {
          this.navHelper.goToMuppets();
        });
  }

  private runCreate() {
    let response;
    console.log(this.muppet);
    this.muppetService.create(this.muppet)
      .subscribe((res) => response = res,
        (error) => {
          console.log("create failed");
        }, () => {
          this.navHelper.goToMuppets();
        });
  }

  private setupForm() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (BooleanHelper.notNull(urlId)) {
      this.setupEditForm(urlId);
    } else {
      this.setupCreateForm();
    }
  }

  private setupEditForm(id: string): void {
    this.muppetService.getSingle(id)
      .subscribe((res) => this.muppet = res,
        (error) => {
          console.log("get single failed");
        });
  }

  private setupCreateForm(): void {
    this.muppet = {
      _id: null,
      name: null,
      debutYear: null,
      commonality: "COMMON",
      speechType: "ENGLISH",
      alignment: "TRUE NEUTRAL",
      mainSeries: null,
      creature: null,
      muppetRank: 50,
      muppetPowerLevel: null,
      archived: false,
      starQuality: 5,
      friendliness: 5,
      imagination: 5,
      showmanship: 5,
      humor: 5,
      absentmindedness: 5,
      mischief: 5,
      floppiness: 5,
      softness: 5,
      passion: 5,
      strength: 5,
      wisdom: 5,
      intelligence: 5,
      constitution: 5,
      charisma: 5,
      dexterity: 5,
      quotes: [],
      notes: [],
      appearanceAdjectives: [],
      attitudeAdjectives: [],
      imageLinks: [],
      tags: [],
    };
  }
}
