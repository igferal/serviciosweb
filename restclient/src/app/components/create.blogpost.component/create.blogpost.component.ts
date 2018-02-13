import { UserService } from "./../../services/user.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
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

  public modifying = false;

  public buttonText = "Crear BlogPost";

  constructor(
    public blogPostService: BlogPostService,
    public tagsService: TagsService,
    public route: ActivatedRoute,
    public userService: UserService,
    public router: Router
  ) {}

  public sendForm(): void {
    if (this.blogpost.title === "" || this.blogpost.body === "") {
      alert("El articulo debe tener titulo y contenido");
      return;
    }

    if (this.modifying) {
      this.modify();
    } else {
      this.createBlogPost();
    }
  }

  private modify() {
    this.blogPostService
      .modifyBlogPost(this.blogpost, this.userService.token)
      .subscribe(
        res => this.router.navigateByUrl("myblogposts"),
        err => alert("error en la petición")
      );
  }

  private createBlogPost() {
    this.blogPostService
      .createBlogpost(this.blogpost, this.userService.token)
      .subscribe(
        res => this.router.navigateByUrl("myblogposts"),
        err => alert("error en la petición")
      );
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
        this.blogPostService.getBlogPostById(id.id).subscribe(res => {
          this.blogpost = res.json()[0];
          this.modifying = true;
          this.buttonText = "Modificar Blogpost";
        });
      } else {
        this.tagsService.getTags().subscribe(tags => (this.tags = tags.json()));
      }
    });
  }
}
