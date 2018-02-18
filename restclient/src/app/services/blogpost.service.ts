import { BlogPost } from "./../model/blogPost";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BlogPostService {
  constructor(public http: Http) {}

  private endpoint: string = "https://156.35.98.44:9090/";

  public createBlogpost(blogPost: BlogPost, token: string) {
    let options = this.getHeadersWithToken(token);
    return this.http.post(this.endpoint + "api/blogpost", blogPost, options);
  }

  public getBlogPosts() {
    return this.http.get(this.endpoint + "blogpost");
  }

  public getBlogPostById(id: string): any {
    return this.http.get(`${this.endpoint}/blogpost?id=${id}`);
  }

  public getMyArticles(userEmail: string) {
    return this.http.get(`${this.endpoint}/blogpost?creatorEmail=${userEmail}`);
  }

  public modifyBlogPost(blogpost: BlogPost, token: string) {
    let options = this.getHeadersWithToken(token);
    return this.http.put(`${this.endpoint}api/blogpost`, blogpost, options);
  }

  public getBlogPostsByTag(id: string) {
    return this.http.get(this.endpoint + `blogpost?tags=${id}`);
  }

  public deleteBlogPost(id: string, token: string) {
    let options = this.getHeadersWithToken(token);

    return this.http.delete(`${this.endpoint}api/blogpost/${id}`, options);
  }

  private getHeadersWithToken(token: string): RequestOptions {
    let headers = new Headers({ "jwt-auth": token });
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}
