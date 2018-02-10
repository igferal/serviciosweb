import { MyBlogPostsComponent } from './../news.component/my.blogposts.component/my.blogposts.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewsComponent } from "../news.component/news.component";
import { CreateNewsComponent } from "../createnews.component/createnews.component";
import { NewsDetailComponent } from "../news.component/news.detail.component/news.detail.component";
import { LoginComponent } from "../login.component/login.component";
import { SignUpComponent } from "../sign.up.component/sign.up.component";

const routes: Routes = [
  { path: "", redirectTo: "news", pathMatch: "full" },
  { path: "news", component: NewsComponent },
  { path: "createNews", component: CreateNewsComponent },
  { path: "login", component: LoginComponent },
  { path: "myblogposts", component: MyBlogPostsComponent },
  { path: "signUp", component: SignUpComponent },
  { path: "editNews/:id", component: CreateNewsComponent },



  { path: 'newsDetail/:id', component: NewsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
