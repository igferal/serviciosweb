import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TagsService {
  constructor(public http: Http) {}

  private endpoint: string = "http://localhost:8443/tag";

  public getTags() {
    return this.http.get(this.endpoint);
  }
}
