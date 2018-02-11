import { CreateBlogPostComponent } from './../create.blogpost.component/create.blogpost.component';
import { BlogPostComponent } from './../blogpost.component/blogpost.component';
import { BlogPostDetailComponent } from './../blogpost.component/blogpost.detail.component/blogpost.detail.component';
import { MyBlogPostsComponent } from './../blogpost.component/my.blogposts.component/my.blogposts.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../login.component/login.component";
import { SignUpComponent } from "../sign.up.component/sign.up.component";

const routes: Routes = [
  { path: "", redirectTo: "blogpost", pathMatch: "full" },
  { path: "blogpost", component: BlogPostComponent },
  { path: "createBlogPost", component: CreateBlogPostComponent },
  { path: "login", component: LoginComponent },
  { path: "myblogposts", component: MyBlogPostsComponent },
  { path: "signUp", component: SignUpComponent },
  { path: "editBlogPost/:id", component: CreateBlogPostComponent },



  { path: 'blogPostDetail/:id', component: BlogPostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
