import { UserService } from "./../../services/user.service";
import { ActivatedRoute, Params } from "@angular/router";
import { BlogPostService } from "./../../services/blogpost.service";
import { TagsService } from "./../../services/tags.service";
import { Component, OnInit } from "@angular/core";
import { BlogPost } from "./../../model/blogPost";

@Component({
  selector: "createNews",
  templateUrl: "./createNews.component.html",
  styleUrls: ["./createNews.component.css"],
  providers: [BlogPostService, TagsService]
})
export class CreateNewsComponent implements OnInit {
  public editorContent: string = `Escribe aquí`;

  public articleName: string;

  public tags: Array<String>;

  public selectedTags: Array<String> = [];

  constructor(
    public blogPostService: BlogPostService,
    public tagsService: TagsService,
    public route: ActivatedRoute
  ) {}

  createArticle(a: BlogPost): void {
    console.log(this.articleName);
    this.blogPostService.createBlogpost(
      new BlogPost(
        this.articleName,
        this.editorContent,
        new Date(),
        this.selectedTags
      )
    );
  }

  public addTag(tag: string) {
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
    } else {
      let pos = this.selectedTags.indexOf(tag);
      this.selectedTags.splice(pos, 1);
    }
    console.log(this.selectedTags);
  }

  ngOnInit() {

    let suscription = this.route.params
      .subscribe(id => {
        
        if (null != id.id) {
          let bp = this.blogPostService.getBlogPostById(id.id);
          this.editorContent = bp.content;
          this.articleName = bp.title;
        } else {
          this.tags = this.tagsService.getTags().tags;
        }
      });
  }
}
