import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TagsService {
  constructor(public http: Http) {}

  private endpoint: string = "https://156.35.98.44:9090/";

  public getTags() {
    return this.http.get(this.endpoint);
  }
}
