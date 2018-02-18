import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable, transition } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService implements CanActivate {
  private endpoint: string = "https://localhost:8443";

  constructor(public http: Http, private router: Router) {
    console.log("Me creo");
  }

  public login(user: string, password) {
    let headers = new Headers({ Email: btoa(user), Password: btoa(password) });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.endpoint + "/api/auth/login", {}, options);
  }

  public closeSession() {

    localStorage.removeItem("token");
    localStorage.removeItem("email");

  }

  public signUp(user: string, password, email: string) {
    return this.http.post(this.endpoint + "/user", {
      name: user,
      password: password,
      email: email
    });
  }

  public canActivate(): boolean {
    if (localStorage.getItem("token") == null) {
      this.router.navigate(["/login"]);
    }

    return localStorage.getItem("token") != null;
  }
}
