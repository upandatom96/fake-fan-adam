import {Component, OnInit} from '@angular/core';
import {BooleanHelper} from "../../utilities/boolean.util";
import {ActivatedRoute} from "@angular/router";
import {NavHelperService} from "../../services/nav-helper.service";
import {Muppet} from "../../models/Muppet.model";
import {MuppetService} from "../../services/muppet.service";

@Component({
  selector: 'app-muppet-form',
  templateUrl: './muppet-form.component.html',
  styleUrls: ['./muppet-form.component.scss']
})
export class MuppetFormComponent implements OnInit {
  public muppet: Muppet = null;
  public showErrors = false;

  public get title(): string {
    if (this.editMode) {
      return "Edit Muppet";
    }
    return "Create Muppet";
  }

  public get errors(): string[] {
    const myErrors = [];
    if (this.nameInvalid) {
      myErrors.push("Please provide a name.");
    }
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

  private get nameInvalid(): boolean {
    return !BooleanHelper.hasValue(this.muppet.name);
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
      name: null,
      _id: null,
    };
  }
}
