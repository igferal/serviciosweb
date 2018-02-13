import { TagsService } from "./../services/tags.service";
import { UserService } from "./../services/user.service";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [TagsService]
})
export class AppComponent implements OnInit {
  public tags = [];

  constructor(
    public userService: UserService,
    public tagsService: TagsService,
    public router: Router
  ) {}

  public ngOnInit() {
    this.tagsService.getTags().subscribe(tags => (this.tags = tags.json()));
  }

  closeSession() {
    this.userService.closeSession();
    this.router.navigateByUrl("login");
  }
}
