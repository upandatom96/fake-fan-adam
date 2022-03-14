import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {TunnelGoon, TunnelGoonOptions} from "../models/TunnelGoon.model";
import {StringHelper} from "../utilities/string.util";

@Injectable({
  providedIn: 'root'
})
export class TunnelGoonService {
  constructor(
    private http: HttpClient,
  ) {
  }

  // TODO add "ping" endpoint '/ping/:id/:class/:bonus'
  // class = brute skulker erudite
  // bonus = health inventory

  public getAll(): Observable<TunnelGoon[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "tunnelGoons",
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<TunnelGoon[]>;
  }

  public createOne(options: TunnelGoonOptions = null): Observable<TunnelGoon> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "tunnelGoons",
    });
    return this.http.post(url, options, CookieHelper.authHeaders) as Observable<TunnelGoon>;
  }

  public deleteOne(id: string): Observable<TunnelGoon> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "tunnelGoons",
      collection: id
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<TunnelGoon>;
  }

  public editOne(tunnelGoon: TunnelGoon): Observable<TunnelGoon> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "tunnelGoons"
    });
    return this.http.put(url, tunnelGoon, CookieHelper.authHeaders) as Observable<TunnelGoon>;
  }

  public getSingle(id: string): Observable<TunnelGoon> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "tunnelGoons",
      collection: id
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<TunnelGoon>;
  }

  public static codifyPartyName(partyNameRaw: string) {
    return partyNameRaw.toUpperCase().replace(/-/gi, "_").replace(/ /gi, "_");
  }

  public static displayifyPartyName(partyName: string) {
    const partyNameWithSpaces = partyName.replace(/-/gi, " ").replace(/_/gi, " ");
    return StringHelper.toTitleCase(partyNameWithSpaces);
  }
}
