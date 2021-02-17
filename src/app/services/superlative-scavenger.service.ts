import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {ScavengerPhrase} from "../models/ScavengerPhrase.model";

@Injectable({
  providedIn: "root"
})
export class SuperlativeScavengerService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getOne(): Observable<ScavengerPhrase> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "superlativeScavenger",
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<ScavengerPhrase>;
  }
}
