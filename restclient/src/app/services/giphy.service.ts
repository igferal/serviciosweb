import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GiphyService {
  constructor(public http: Http) {}

  private apyKey: string = "vwrLqQ0gL2ljgKQGpWgP3fB0OOY3qVSu";

  private endpoint: string = "https://api.giphy.com";

  public getGifs(tag: string) {
    return this.http.get(
      `${this.endpoint}/v1/gifs/search?api_key=${this.apyKey}&q=${tag}}`
    );
  }
}
