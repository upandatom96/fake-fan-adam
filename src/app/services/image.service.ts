import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DetailedImage} from "../models/DetailedImage.model";

@Injectable({
  providedIn: "root"
})
export class ImageService {

  constructor(
    private http: HttpClient
  ) { }

  public loadAssetsOnline(): Observable<DetailedImage[]> {
    const onlineUrl = "https://adam-on-the-internet.github.io/asset-reader/catalog.json";
    return this.http.get(onlineUrl) as Observable<DetailedImage[]>;
  }
}
