import { UserService } from "./../../services/user.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  public user: string = "";

  public password: string = "";

  constructor(public userService: UserService, public router: Router) {}

  public logUser(): void {
    
    if (this.user != "" && this.password != "")
      this.userService.login(this.user, this.password);
    else {
      this.router.navigateByUrl("/createNews");
    }
  }
}
