import { MyBlogPostsComponent } from "./components/blogpost.component/my.blogposts.component/my.blogposts.component";
import { BlogPostComponent } from "./components/blogpost.component/blogpost.component";
import { BlogPostDetailComponent } from "./components/blogpost.component/blogpost.detail.component/blogpost.detail.component";
import { CreateBlogPostComponent } from "./components/create.blogpost.component/create.blogpost.component";
import { UserService } from "./services/user.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
import { AppComponent } from "./components/app.component";
import { AppRoutingModule } from "./components/router.module/router.module";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login.component/login.component";
import { SignUpComponent } from "./components/sign.up.component/sign.up.component";
import { HttpModule } from "@angular/http";
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    CreateBlogPostComponent,
    BlogPostDetailComponent,
    LoginComponent,
    SignUpComponent,
    MyBlogPostsComponent
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NotifierModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
