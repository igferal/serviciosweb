import { UserService } from "./../services/user.service";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public logged: any;

  constructor(public userService: UserService) {}

  public ngOnInit() {
    console.log("entrando");
    this.logged = this.userService.getUser();
    console.log(this.logged);
    
  }
}
