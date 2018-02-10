import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class NewsService {
  constructor(public http: HttpClient) {}

  private endpoint: string = "http://156.35.98.44:8080/restapi/news";

  public createNews(newsContent: string, newsTitle) {
    return this.http.post(this.endpoint, {
      newsTitle: newsTitle,
      newsContent: newsContent
    });
  }

  public getNews() {
    return this.http.get(this.endpoint);
  }

  public getNewsById(id: string): any {
    return {
      tituloArticulo: "Honda Civic to flama",
      contenidoArticulo:
        "<p>Hola HOla</p><p>En un lugar de la mancha de cuyo Honda Civic</p> <strong>Porquesi</strong>"
    };
  }
}
