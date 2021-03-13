import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {Muppet} from "../models/Muppet.model";
import {MuppetStats} from "../models/MuppetStats.model";

@Injectable({
  providedIn: 'root'
})
export class MuppetService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getAll(): Observable<Muppet[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "muppet",
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Muppet[]>;
  }

  public getSingle(id: string): Observable<Muppet> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "muppet",
      collection: id
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Muppet>;
  }

  public getRandom(): Observable<Muppet> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "muppet",
      collection: "random"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Muppet>;
  }

  public getStats(): Observable<MuppetStats> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "muppet",
      collection: "stats"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<MuppetStats>;
  }

  public create(muppet: Muppet): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "muppet"
    });
    return this.http.post(url, muppet, CookieHelper.authHeaders) as Observable<any>;
  }

  public update(muppet: Muppet): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "muppet"
    });
    return this.http.put(url, muppet, CookieHelper.authHeaders) as Observable<any>;
  }

  public delete(id: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "muppet",
      params: id,
    });
    return this.http.delete(url, CookieHelper.authHeaders) as Observable<any>;
  }
}
