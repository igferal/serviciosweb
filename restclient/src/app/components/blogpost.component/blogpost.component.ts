import { BlogPostService } from "./../../services/blogpost.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "news",
  templateUrl: "./blogpost.component.html",
  styleUrls: ["./blogpost.component.css"],
  providers: [BlogPostService]
})
export class BlogPostComponent implements OnInit {
  public blogposts = [];

  constructor(public router: Router, public blogPostService: BlogPostService) {}

  public goToDetail(id: string) {
    console.log(id);
    this.router.navigate(["/blogPostDetail", id]);
  }

  public ngOnInit() {
    this.blogPostService.getBlogPosts().subscribe(res => {

      this.blogposts  = res.json();
    });
  }
}
