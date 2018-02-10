import { NewsService } from './../../services/news.service';
import { Component } from "@angular/core";

@Component({
  selector: "createNews",
  templateUrl: "./createNews.component.html",
  styleUrls: ["./createNews.component.css"]
  ,providers : [NewsService]
})
export class CreateNewsComponent {

  public editorContent: string = `En un lugar de la mancha, de cuyo nombre no quiero acordame,
   había un Honda Civic 2017 de gasofa`;
   
  public articleName :string;

   constructor(public newsService : NewsService){}

  createArticle(): void {

    console.log(this.articleName);
    this.newsService.createNews(this.articleName,this.editorContent).subscribe((res)=>console.log(res));
    console.log(this.editorContent);
  }}