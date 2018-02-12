import { UserService } from "./../../services/user.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "signUp",
  templateUrl: "./sign.up.component.html",
  styleUrls: ["./sign.up.component.css"]
})
export class SignUpComponent {
  public email: string = "";

  public user: string = "";

  public password: string = "";

  public repeatPassword: string = "";

  constructor(public userService: UserService, public router: Router) {}

  public createUser(): void {
    this.userService.signUp(this.user, this.password, this.email);
  }
}
