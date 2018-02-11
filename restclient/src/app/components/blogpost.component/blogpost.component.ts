import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "news",
  templateUrl: "./blogpost.component.html",
  styleUrls: ["./blogpost.component.css"]
})
export class BlogPostComponent {
  constructor(public router: Router) {}

  public goToDetail(id: string) {
    console.log(id);
    this.router.navigate(["/blogPostDetail", id]);
  }
}
