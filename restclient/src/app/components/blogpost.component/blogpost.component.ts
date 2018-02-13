import { GiphyService } from "./../../services/giphy.service";
import { BlogPostService } from "./../../services/blogpost.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "news",
  templateUrl: "./blogpost.component.html",
  styleUrls: ["./blogpost.component.css"],
  providers: [BlogPostService, GiphyService]
})
export class BlogPostComponent implements OnInit {
  public blogposts = [];
  public gifs = [];

  constructor(
    public router: Router,
    public blogPostService: BlogPostService,
    public route: ActivatedRoute,
    public giphyService: GiphyService
  ) {}

  public goToDetail(id: string) {
    console.log(id);
    this.router.navigate(["/blogPostDetail", id]);
  }

  public ngOnInit() {
    let suscription = this.route.params.subscribe(id => {
      if (null != id.id) {
        this.giphyService.getGifs(id.id).subscribe(res => {
          this.gifs = res.json().data;
          console.log(this.gifs[0]);
          this.blogPostService.getBlogPostsByTag(id.id).subscribe(res => {
            this.blogposts = res.json();
          });
        });
      } else {
        this.giphyService.getGifs("news").subscribe(res => {
          this.gifs = res.json().data;
          this.blogPostService.getBlogPosts().subscribe(res => {
            this.blogposts = res.json();
          });
        });
      }
    });
  }
}
