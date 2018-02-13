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
    if (this.validateEmail() == false || this.checkPasswords() == false) {
      return;
    }

    this.userService
      .signUp(this.user, this.password, this.email)
      .subscribe(
        res => this.router.navigateByUrl("login"),
        err => alert("Pruebe de nuevo")
      );
  }

  public checkPasswords() {
    if (this.password != this.repeatPassword) {
      alert("Las contraseñas no coinciden");
      this.repeatPassword = "";
      this.password = "";
      return false;
    }
    return true;
  }

  public validateEmail() {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(this.email.toLowerCase()) == false) {
      alert("Proporcione un email valido");
      return false;
    }
    return true;
  }
}
