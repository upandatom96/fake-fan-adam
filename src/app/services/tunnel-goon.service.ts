import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {TunnelGoon, TunnelGoonOptions} from "../models/TunnelGoon.model";

@Injectable({
  providedIn: 'root'
})
export class TunnelGoonService {
  constructor(
    private http: HttpClient,
  ) {
  }

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
}
