import { Injectable } from "@angular/core";
import { isDevMode } from "@angular/core";

@Injectable()
export class SettingsService {
  private _url = "http://localhost:5555/";

  public get url() {
    return this._url;
  }

//   public get froalaKey() {
//     return "TezfbntA-8nzhiqpF4wl==";
//   };

  constructor() {
    var w = <any>window;
    console.log("isDevMode()", isDevMode());
    if (isDevMode()) {
      this._url = "http://localhost:5555/";
    } 
  }
}
