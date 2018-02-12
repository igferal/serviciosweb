import { BlogPost } from "./../model/blogPost";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BlogPostService {
  constructor(public http: Http) {}

  private endpoint: string = "http://localhost:8443/";

  public createBlogpost(blogPost: BlogPost, token: string) {
    console.log(blogPost);
    let options = this.getHeadersWithToken(token);
    return this.http.post(this.endpoint + "api/blogpost", blogPost, options);
  }

  public getBlogPosts() {
    return this.http.get(this.endpoint + "blogpost");
  }

  public getBlogPostById(id: string): any {
    return this.http.get(`${this.endpoint}/blogpost?id=${id}`);
  }

  public getMyArticles() {
    return [
      {
        id: "1",
        title: "Si ya saben como me pongo pa que ",
        date: new Date()
      },
      {
        title: "Si ya saben como me puse",
        id: "2",
        date: new Date()
      },
      {
        title: "Honda brum brum",
        id: "3",
        date: new Date()
      }
    ];
  }

  private getHeadersWithToken(token: string): RequestOptions {
    let headers = new Headers({ "jwt-auth": token });
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}
