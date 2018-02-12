import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TagsService {
  constructor(public http: Http) {}

  private endpoint: string = "http://localhost:8443/api/tag";

  public getTags(token: string) {
    let headers = new Headers({ "jwt-auth" :  token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.endpoint, options);
  }
}
