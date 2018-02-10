import { UserService } from './services/user.service';
import { NewsDetailComponent } from './components/news.component/news.detail.component/news.detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AppComponent } from './components/app.component';
import { AppRoutingModule } from './components/router.module/router.module';
import { NewsComponent } from './components/news.component/news.component';
import { CreateNewsComponent } from './components/createnews.component/createnews.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login.component/login.component';
import { SignUpComponent } from './components/sign.up.component/sign.up.component';
import { MyBlogPostsComponent } from './components/news.component/my.blogposts.component/my.blogposts.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CreateNewsComponent,
    NewsDetailComponent,
    LoginComponent,
    SignUpComponent,
    MyBlogPostsComponent
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
