import { NewsService } from "./../../../services/news.service";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ActivatedRoute, Params } from "@angular/router";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "newsDetail",
  templateUrl: "./news.detail.component.html",
  styleUrls: ["./news.detail.component.css"],
  providers: [NewsService]
})
export class NewsDetailComponent implements OnInit {
  public id: string;

  public article;

  constructor(public route: ActivatedRoute, public newsService: NewsService) {}

  ngOnInit() {
    let suscription = this.route.params
      .switchMap((params: Params) => (this.id = params["id"]))
      .subscribe(board => {
        console.log("Ruta inicializada");
      });

    this.article = this.newsService.getNewsById(this.id);
  }
}
