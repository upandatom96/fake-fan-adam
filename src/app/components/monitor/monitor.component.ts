import {Component, OnInit} from "@angular/core";
import {MonitorService} from "../../services/monitor.service";
import {Hero} from "../../models/Hero.model";
import {QuestBotStats} from "../../models/HeroStats.model";
import {Mystery, MysteryStats} from "../../models/Clue.model";
import {SettingsService} from "../../services/settings.service";
import {Case, Evidence, Issue} from "../../models/Order.model";
import {interval, Subscription} from "rxjs";

@Component({
  selector: "app-monitor",
  templateUrl: "./monitor.component.html",
  styleUrls: ["./monitor.component.scss"]
})
export class MonitorComponent implements OnInit {
  private monitorRefresher: Subscription;

  public currentHero: Hero = null;
  public heroStats: QuestBotStats = null;

  public get questBotReady(): boolean {
    return this.currentHero !== null
      && this.heroStats !== null;
  }

  public currentMystery: Mystery = null;
  public mysteryStats: MysteryStats = null;

  public get clueBotReady(): boolean {
    return this.currentMystery !== null
      && this.mysteryStats !== null;
  }

  public openCases: Case[] = null;
  public closedCases: Case[] = null;
  public allEvidence: Evidence[] = null;
  public allWitnesses: Evidence[] = null;
  public allIssues: Issue[] = null;

  public get latestCase(): Case {
    if (this.openCases.length > 0) {
      return this.openCases[0];
    } else if (this.closedCases.length > 0) {
      return this.closedCases[0];
    }
    return null;
  }

  public get orderReady(): boolean {
    return this.openCases !== null
      && this.closedCases !== null
      && this.allEvidence !== null
      && this.allWitnesses !== null
      && this.allIssues !== null;
  }

  constructor(
    private monitorService: MonitorService,
    private settingsService: SettingsService,
  ) {
    this.settingsService.showNav = false;
  }

  public ngOnInit() {
    this.startRefresh();
  }

  private startRefresh() {
    this.checkAllMonitors();
    const count = 30;
    const source = interval(count * 1000);
    this.monitorRefresher = source.subscribe(() => this.checkAllMonitors());
  }

  private checkAllMonitors() {
    console.log("Refreshing monitors...");
    this.checkQuestBot();
    this.checkClueBot();
    this.checkOrder();
  }

  private checkQuestBot() {
    this.loadCurrentHero();
    this.loadHeroStats();
  }

  private checkClueBot() {
    this.loadCurrentMystery();
    this.loadMysteryStats();
  }

  private checkOrder() {
    this.loadOpenCases();
    this.loadClosedCases();
    this.loadEvidence();
    this.loadWitnesses();
    this.loadIssues();
  }

  private loadIssues() {
    this.allIssues = null;
    this.monitorService.getIssue()
      .subscribe((res) => this.allIssues = res,
        (error) => {
          console.log("get issues failed");
        });
  }

  private loadWitnesses() {
    this.allWitnesses = null;
    this.monitorService.getWitness()
      .subscribe((res) => this.allWitnesses = res,
        (error) => {
          console.log("get witnesses failed");
        });
  }

  private loadEvidence() {
    this.allEvidence = null;
    this.monitorService.getEvidence()
      .subscribe((res) => this.allEvidence = res,
        (error) => {
          console.log("get evidence failed");
        });
  }

  private loadOpenCases() {
    this.openCases = null;
    this.monitorService.getOpenCases()
      .subscribe((res) => this.openCases = res,
        (error) => {
          console.log("get open cases failed");
        });
  }

  private loadClosedCases() {
    this.closedCases = null;
    this.monitorService.getClosedCases()
      .subscribe((res) => this.closedCases = res,
        (error) => {
          console.log("get closed cases failed");
        });
  }

  private loadCurrentMystery() {
    this.currentMystery = null;
    this.monitorService.getCurrentMystery()
      .subscribe((res) => this.currentMystery = res,
        (error) => {
          console.log("get current mystery failed");
        });
  }

  private loadMysteryStats() {
    this.mysteryStats = null;
    this.monitorService.getClueBotStats()
      .subscribe((res) => this.mysteryStats = res,
        (error) => {
          console.log("get clue bot stats failed");
        });
  }

  private loadCurrentHero() {
    this.currentHero = null;
    this.monitorService.getCurrentHero()
      .subscribe((res) => this.currentHero = res,
        (error) => {
          console.log("get current hero failed");
        });
  }

  private loadHeroStats() {
    this.heroStats = null;
    this.monitorService.getHeroStats()
      .subscribe((res) => this.heroStats = res,
        (error) => {
          console.log("get hero stats failed");
        });
  }

}
