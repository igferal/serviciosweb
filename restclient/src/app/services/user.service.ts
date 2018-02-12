import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable, transition } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
  private endpoint: string = "http://localhost:8443";

  public user: string;

  public token: string;

  constructor(public http: Http) {
    console.log("Me creo");
  }

  public login(user: string, password) {
    let headers = new Headers({ Email: btoa(user), Password: btoa(password) });
    let options = new RequestOptions({ headers: headers });

    let observable = this.http.post(
      this.endpoint + "/api/auth/login",
      {},
      options
    );

    observable.subscribe(res => {
      let response = res.json();
      this.user = response.email;
      this.token = response.token;
      console.log(this.token);
    });

    return observable;
  }

  public closeSession() {
    this.user = null;
    this.token = null;
  }

  public signUp(user: string, password, email: string) {
    this.http
      .post(this.endpoint + "/user", {
        name: user,
        password: password,
        email: email
      })
      .subscribe(res => {
        console.log(res);
      });
  }

  public getUser() {
    return this.user;
  }
}
