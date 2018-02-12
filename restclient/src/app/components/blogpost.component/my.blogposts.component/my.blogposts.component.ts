import { Http } from '@angular/http';
import { BlogPost } from "./../../../model/blogPost";
import { UserService } from "./../../../services/user.service";
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

  constructor(
    public router: Router,
    public blogPostService: BlogPostService,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.blogPostService
      .getMyArticles(this.userService.user)
      .subscribe(posts => {
        this.blogposts = posts.json();
      });
  }

  modifyBlogPost(id: string) {
    this.router.navigate(["editBlogPost", id]);
    console.log(id);
  }

  deleteBlogPost(blogpost: BlogPost) {
    
  }
}
