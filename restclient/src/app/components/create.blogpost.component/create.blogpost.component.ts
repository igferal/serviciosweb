import { UserService } from "./../../services/user.service";
import { ActivatedRoute, Params } from "@angular/router";
import { BlogPostService } from "./../../services/blogpost.service";
import { TagsService } from "./../../services/tags.service";
import { Component, OnInit } from "@angular/core";
import { BlogPost } from "./../../model/blogPost";

@Component({
  selector: "createBlogpost",
  templateUrl: "./create.blogpost.component.html",
  styleUrls: ["./create.blogpost.component.css"],
  providers: [BlogPostService, TagsService]
})
export class CreateBlogPostComponent implements OnInit {
  public blogpost: BlogPost = new BlogPost("", "Escribe aqui", new Date(), []);

  public tags: Array<String>;

  constructor(
    public blogPostService: BlogPostService,
    public tagsService: TagsService,
    public route: ActivatedRoute
  ) {}

  createArticle(a: BlogPost): void {
    this.blogPostService.createBlogpost(this.blogpost);
  }

  public addTag(tag: string) {
    if (!this.blogpost.tags.includes(tag)) {
      this.blogpost.tags.push(tag);
    } else {
      let pos = this.blogpost.tags.indexOf(tag);
      this.blogpost.tags.splice(pos, 1);
    }
    console.log(this.blogpost.tags);
  }

  ngOnInit() {
    let suscription = this.route.params.subscribe(id => {
      if (null != id.id) {
        let bp = this.blogPostService.getBlogPostById(id.id);
        this.blogpost.content = bp.content;
        this.blogpost.title = bp.title;
      } else {
        this.tags = this.tagsService.getTags().tags;
      }
    });
  }
}
