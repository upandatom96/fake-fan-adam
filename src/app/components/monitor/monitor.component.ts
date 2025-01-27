import {Component, OnInit} from "@angular/core";
import {MonitorService} from "../../services/monitor.service";
import {Hero} from "../../models/Hero.model";
import {QuestBotStats} from "../../models/HeroStats.model";
import {Mystery, MysteryStats} from "../../models/Clue.model";
import {SettingsService} from "../../services/settings.service";
import {Case, Evidence, Issue} from "../../models/Order.model";
import {interval, Subscription} from "rxjs";
import {SunriseSunsetTimes} from "../../models/SunriseSunsetTimes.model";

@Component({
  selector: "app-monitor",
  templateUrl: "./monitor.component.html",
  styleUrls: ["./monitor.component.scss"]
})
export class MonitorComponent implements OnInit {
  private monitorRefresher: Subscription;

  public currentHero: Hero = null;
  public heroStats: QuestBotStats = null;

  public author = "adam_on_the_net";
  public listUrl = "adam-on-the-internet-25746";

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

  public closedCases: Case[] = null;
  public caseSummaries: string[] = null;
  public allEvidence: Evidence[] = null;
  public allWitnesses: Evidence[] = null;
  public allIssues: Issue[] = null;
  public sunriseSunsetTimes: SunriseSunsetTimes = null;

  public get latestCasePieces(): string[][] {
    return this.caseSummaries.slice(0, 2)
      .map(x => x.split("|"));
  }

  public get orderReady(): boolean {
    return this.closedCases !== null
      && this.caseSummaries !== null
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
    this.loadSunriseSunsetTimes();
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
    this.loadClosedCases();
    this.loadCaseSummaries();
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

  private loadClosedCases() {
    this.closedCases = null;
    this.monitorService.getClosedCases()
      .subscribe((res) => this.closedCases = res,
        (error) => {
          console.log("get closed cases failed");
        });
  }

  private loadCaseSummaries() {
    this.closedCases = null;
    this.monitorService.getCaseSummaries()
      .subscribe((res) => this.caseSummaries = res,
        (error) => {
          console.log("get summary cases failed");
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

  private loadSunriseSunsetTimes() {
    this.sunriseSunsetTimes = null;
    this.monitorService.getSunriseSunset()
      .subscribe((res) => this.sunriseSunsetTimes = res,
        (error) => {
          console.log("get sunrise sunset failed");
        });
  }

}
