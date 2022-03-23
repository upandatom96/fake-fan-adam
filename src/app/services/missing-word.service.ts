import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {HttpClient} from "@angular/common/http";
import {MissingWord} from "../models/MissingWord.model";

@Injectable({
  providedIn: 'root'
})
export class MissingWordService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public drawCard(): Observable<MissingWord> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "missingWord",
      collection: "draw"
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<MissingWord>;
  }
}
