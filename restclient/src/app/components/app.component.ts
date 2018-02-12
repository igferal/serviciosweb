import { UserService } from "./../services/user.service";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
 
  constructor(public userService: UserService) {}

  public ngOnInit() {
  
    
  }

  closeSession(){
    this.userService.closeSession();
  }
}
