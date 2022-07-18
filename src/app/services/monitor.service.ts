import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {Hero} from "../models/Hero.model";
import {QuestBotStats} from "../models/HeroStats.model";
import {Mystery, MysteryStats} from "../models/Clue.model";
import {Case, Evidence, Issue, Witness} from "../models/Order.model";
import {SunriseSunsetTimes, SunriseSunsetTimesResponse} from "../models/SunriseSunsetTimes.model";
import {map} from "rxjs/operators";
import {StringHelper} from "../utilities/string.util";

@Injectable({
  providedIn: "root"
})
export class MonitorService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getSunriseSunset(): Observable<SunriseSunsetTimes> {
    return this.getSunriseSunsetTimesResponse()
      .pipe(map(data => this.mapForDisplay(data))) as Observable<SunriseSunsetTimes>;
  }

  private getSunriseSunsetTimesResponse(): Observable<SunriseSunsetTimesResponse> {
    // Credit to: https://sunrise-sunset.org/api
    const url = `https://api.sunrise-sunset.org/json?lat=41.619549&lng=-93.598022&date=today&formatted=0`;
    return this.http.get(url) as Observable<SunriseSunsetTimesResponse>;
  }

  public getOpenCases(): Observable<Case[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "case",
      collection: "open"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Case[]>;
  }

  public getCaseSummaries(): Observable<string[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "case",
      collection: "summary"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<string[]>;
  }

  public getClosedCases(): Observable<Case[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "case",
      collection: "closed"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Case[]>;
  }

  public getIssue(): Observable<Issue[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "issue"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Issue[]>;
  }

  public getEvidence(): Observable<Evidence[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "evidence"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Evidence[]>;
  }

  public getWitness(): Observable<Witness[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "witness"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Witness[]>;
  }

  public getCurrentMystery(): Observable<Mystery> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "clueBot",
      collection: "current",
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Mystery>;
  }

  public getClueBotStats(): Observable<MysteryStats> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "clueBot",
      collection: "stats",
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<MysteryStats>;
  }

  public getHeroStats(): Observable<QuestBotStats> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "quest",
      collection: "heroStats",
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<QuestBotStats>;
  }

  public getCurrentHero(): Observable<Hero> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "quest",
      collection: "currentHero",
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Hero>;
  }

  private mapForDisplay(response: SunriseSunsetTimesResponse): SunriseSunsetTimes {
    const results = response.results;
    const sunriseTime = StringHelper.convertDateStringToDisplayDateWithTimezone(results.sunrise);
    const sunsetTime = StringHelper.convertDateStringToDisplayDateWithTimezone(results.sunset);
    const dayLength = StringHelper.convertSecondsToHoursMinutesSeconds(results.day_length);
    return {
      dayLength,
      date: StringHelper.getDateString(new Date(results.sunrise)),
      sunriseTime,
      sunsetTime,
    };
  }
}
