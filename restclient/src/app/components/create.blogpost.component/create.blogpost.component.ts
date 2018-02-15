import { NotifierService } from "angular-notifier";
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
  public blogpost: BlogPost = new BlogPost("", "Escribe aqui", new Date(), [], {
    email: localStorage.getItem("email")
  });

  public tags: Array<String>;

  public modifying = false;

  public buttonText = "Crear BlogPost";

  constructor(
    public blogPostService: BlogPostService,
    public tagsService: TagsService,
    public route: ActivatedRoute,
    public userService: UserService,
    public router: Router,
    public notifierService: NotifierService
  ) {}

  public sendForm(): void {
    if (this.blogpost.title === "" || this.blogpost.body === "") {
      this.notifierService.notify(
        "error",
        "El articulo debe tener titulo y contenido"
      );
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
      .modifyBlogPost(this.blogpost, localStorage.getItem("token"))
      .subscribe(
        res => this.router.navigateByUrl("myblogposts"),
        err => this.notifierService.notify("error", "Error en el server")
      );
  }

  private createBlogPost() {
    this.blogPostService
      .createBlogpost(this.blogpost, localStorage.getItem("token"))
      .subscribe(
        res => this.router.navigateByUrl("myblogposts"),
        err => this.notifierService.notify("error", "Error en el server")
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
