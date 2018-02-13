import { BlogPostService } from "./../../services/blogpost.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "news",
  templateUrl: "./blogpost.component.html",
  styleUrls: ["./blogpost.component.css"],
  providers: [BlogPostService]
})
export class BlogPostComponent implements OnInit {
  public blogposts = [];

  constructor(
    public router: Router,
    public blogPostService: BlogPostService,
    public route: ActivatedRoute
  ) {}

  public goToDetail(id: string) {
    console.log(id);
    this.router.navigate(["/blogPostDetail", id]);
  }

  public ngOnInit() {
    let suscription = this.route.params.subscribe(id => {
      if (null != id.id) {
        this.blogPostService.getBlogPostsByTag(id.id).subscribe(res => {
          this.blogposts = res.json();
        });
      } else {
        this.blogPostService.getBlogPosts().subscribe(res => {
          this.blogposts = res.json();
        });
      }
    });
  }
}
