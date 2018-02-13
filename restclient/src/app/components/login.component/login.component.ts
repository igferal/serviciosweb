import { UserService } from "./../../services/user.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  public user: string = "";

  public password: string = "";

  constructor(
    public userService: UserService,
    public router: Router,
    public notifierService: NotifierService
  ) {}

  public logUser(): void {
    if (this.user == "" || this.password == "") {
      this.notifierService.notify("error", "Introduzca usuario y contraseña");
    } else {
      this.userService.login(this.user, this.password).subscribe(
        res => {
          if (res.json().token != null) {
            let response = res.json();
            this.userService.user = response.email;
            this.userService.token = response.token;
            this.router.navigateByUrl("/myblogposts");
          }
        },
        err => {
          this.notifierService.notify("error", "Usuario inexistente");
        }
      );
    }
  }
}
