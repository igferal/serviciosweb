import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, transition } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
  private endpoint: string = "http://156.35.98.44:8080/restapi/user";

  private user: boolean = false;

  constructor(public http: HttpClient) {
    console.log("Me creo");
  }

  public login(user: string, password) {
    this.user = true;

    return {
      user: "Voctor",
      key: "340958y7trugdfhbjn"
    };
  }

  public getUser() {
    return this.user;
  }

  
}
