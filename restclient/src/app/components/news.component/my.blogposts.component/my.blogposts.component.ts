import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { BlogPostService } from "./../../../services/blogpost.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "myblogpost",
  templateUrl: "./my.blogposts.component.html",
  styleUrls: ["./my.blogposts.component.css"],
  providers: [BlogPostService]
})
export class MyBlogPostsComponent implements OnInit {
  public blogposts;

  constructor(public router: Router, public blogPostService: BlogPostService) {}

  ngOnInit() {
    this.blogposts = this.blogPostService.getMyArticles();
  }

  modifyBlogPost(id: string) {
  
    this.router.navigate(["editNews",id])
    console.log(id);
  }

  deleteBlogPost(id: string) {
    console.log(id);
  }
}
