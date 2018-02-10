import { BlogPost } from "./../model/blogPost";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BlogPostService {
  constructor(public http: HttpClient) {}

  private endpoint: string = "http://156.35.98.44:8080/restapi/blogpost";

  public createBlogpost(blogPost: BlogPost) {
    console.log(blogPost);
    return this.http.post(this.endpoint, blogPost);
  }

  public getNews() {
    return this.http.get(this.endpoint);
  }

  public getBlogPostById(id: string): any {
    return {
      title: "Honda Civic to flama",
      content: `<p><a href="https://www.rust-lang.org/">Rust</a> is a modern systems programming language focusing on safety, speed, and concurrency. It accomplishes these goals by being memory safe without using garbage collection.</p><p>Rust by Example (RBE) is a collection of runnable examples that illustrate various Rust concepts and standard libraries. To get even more out of these examples, don&#39;t forget to&nbsp;<a href="https://www.rust-lang.org/install.html">install Rust locally</a> and check out the&nbsp;<a href="https://doc.rust-lang.org/std/">official docs</a>. Additionally for the curious, you can also&nbsp;<a href="https://github.com/rust-lang/rust-by-example">check out the source code for this site</a>.</p><p>&nbsp;</p><p><strong>Created By Nacho</strong></p><p><br></p><p><strong><em>121212</em></strong></p>`,
      date: new Date(),
      tags: ["deporte", "lo flama"]
    };
  }
}
