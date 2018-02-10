import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TagsService {
  constructor(public http: HttpClient) {}

  private endpoint: string = "http://156.35.98.44:8080/restapi/tags";

  public getTags() {
    return {
      tags: ["accion", "deporte","otrosTags"]
    };
  }
}
