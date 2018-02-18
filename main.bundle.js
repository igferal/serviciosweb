webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_blogpost_component_my_blogposts_component_my_blogposts_component__ = __webpack_require__("../../../../../src/app/components/blogpost.component/my.blogposts.component/my.blogposts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_blogpost_component_blogpost_component__ = __webpack_require__("../../../../../src/app/components/blogpost.component/blogpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_blogpost_component_blogpost_detail_component_blogpost_detail_component__ = __webpack_require__("../../../../../src/app/components/blogpost.component/blogpost.detail.component/blogpost.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_blogpost_component_create_blogpost_component__ = __webpack_require__("../../../../../src/app/components/create.blogpost.component/create.blogpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_router_module_router_module__ = __webpack_require__("../../../../../src/app/components/router.module/router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_component_login_component__ = __webpack_require__("../../../../../src/app/components/login.component/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sign_up_component_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign.up.component/sign.up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_notifier__ = __webpack_require__("../../../../angular-notifier/esm5/angular-notifier.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__components_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_blogpost_component_blogpost_component__["a" /* BlogPostComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_create_blogpost_component_create_blogpost_component__["a" /* CreateBlogPostComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_blogpost_component_blogpost_detail_component_blogpost_detail_component__["a" /* BlogPostDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_component_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_sign_up_component_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_blogpost_component_my_blogposts_component_my_blogposts_component__["a" /* MyBlogPostsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__components_router_module_router_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular_notifier__["a" /* NotifierModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__components_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --main-color: #0c8346;\n  --secondary-color: #2b4162;\n  --third-color: #fa9f42;\n}\n\nheader {\n  height: 10vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: white;\n  background: #0c8346;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n\n.link {\n  margin: 0px 10px;\n  font-size: 1.2em;\n  margin-bottom: 3px;\n}\n\n.link:hover,li:hover {\n  border-bottom: 2px dashed white;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\nmain {\n  margin-top: 10px;\n  height: 90vh;\n}\n\n.logo {\n  font-size: 1.8em;\n  font-weight: 100;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin-left: 10%;\n}\n\n.signup {\n  padding: 5px 10px;\n  border: white 1px solid;\n  background: #0c8346;\n  color: white;\n  border-radius: 5px;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n.signup:hover {\n  border: white 1px solid;\n  color: #0c8346;\n  background: white;\n}\n\n.navLinks {\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 0;\n}\n\n.none {\n  visibility: hidden;\n}\n\nbutton {\n  border: none;\n  outline: none;\n  font-size: 1.1em;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.login {\n  padding: 5px 10px;\n  background: white;\n  color: #0c8346;\n  border-radius: 5px;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n.login:hover {\n  border: white 1px solid;\n  background: #0c8346;\n  color: white;\n}\n\n.spaced {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nli {\n  list-style: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"spaced\">\n    <a routerLink=\"\" class=\"none\"></a>\n    <a class=\"logo\" routerLink=\"/\">Uonewsfeed</a>\n    <div>\n      <a *ngIf=\"!isLogged()\" class=\"signup\" routerLink=\"signUp\">Crear Usuario</a>\n      <a *ngIf=\"!isLogged()\" class=\"login\" routerLink=\"/login\">Iniciar sesión</a>\n      <button *ngIf=\"isLogged()\" class=\"signup\" (click)=\"closeSession()\">Cerrar sesión</button>\n\n    </div>\n  </nav>\n  <ul class=\"navLinks\">\n    <li>\n      <a class=\"link\" routerLink=\"blogpost\">Blogposts</a>\n    </li>\n    <li>\n      <a class=\"link\" *ngIf=\"isLogged()\" routerLink=\"myblogposts\">Mis Articulos</a>\n    </li>\n    <li>\n      <a class=\"link\" *ngIf=\"isLogged()\" routerLink=\"createBlogPost\">Crear Noticia</a>\n    </li>\n    <li *ngFor=\"let tag of tags\">\n      <a class=\"link\" routerLink=\"blogpost/{{tag.name}}\">{{tag.name}}</a>\n    </li>\n  </ul>\n</header>\n<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_tags_service__ = __webpack_require__("../../../../../src/app/services/tags.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, tagsService, router) {
        this.userService = userService;
        this.tagsService = tagsService;
        this.router = router;
        this.tags = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagsService.getTags().subscribe(function (tags) { return (_this.tags = tags.json()); });
    };
    AppComponent.prototype.isLogged = function () {
        return localStorage.getItem("token") != null;
    };
    AppComponent.prototype.closeSession = function () {
        this.userService.closeSession();
        this.router.navigateByUrl("login");
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/components/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_tags_service__["a" /* TagsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services_tags_service__["a" /* TagsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blogpost.component/blogpost.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\nimg {\n  height: 170px;\n  width: 170px;\n  border-radius: 170px;\n}\n\nimg:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\nsection {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 100%;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\narticle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 10px;\n  width: 40%;\n  border-radius: 20px;\n}\n\narticle:hover{\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);\n\n}\n\np {\n  color: rgba(0, 0, 0, 0.548);\n}\n\narticle h1 {\n  margin-bottom: -10px;\n  color: #0c8346;\n}\n\n.btn-main{\n  padding: 10px 20px;\n  border-radius: 5px;\n  background: #0c8346;\n  color: white;\n  text-decoration: none;\n  border: none;\n}\n\nbutton:focus{\n  outline: none;\n}\n\n.btn-main:hover{\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.right{\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n\n/*\n\n\n-extension -XadditionalHeaders  antes de xnocompile\n\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blogpost.component/blogpost.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <article *ngFor=\"let blogpost of blogposts\">\n    <img src=\"{{gifs[blogpost.id].images.original.url}}\" alt=\"\" srcset=\"\">\n    <h1>{{blogpost.title}}</h1>\n    <p>Por {{blogpost.creator.name}} en {{blogpost.creationDate | date}}</p>\n    <button (click)=\"goToDetail(blogpost.id)\" class=\"btn-main right\">Leer</button>\n  </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/blogpost.component/blogpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_giphy_service__ = __webpack_require__("../../../../../src/app/services/giphy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blogpost_service__ = __webpack_require__("../../../../../src/app/services/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogPostComponent = /** @class */ (function () {
    function BlogPostComponent(router, blogPostService, route, giphyService) {
        this.router = router;
        this.blogPostService = blogPostService;
        this.route = route;
        this.giphyService = giphyService;
        this.blogposts = [];
        this.gifs = [];
    }
    BlogPostComponent.prototype.goToDetail = function (id) {
        console.log(id);
        this.router.navigate(["/blogPostDetail", id]);
    };
    BlogPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var suscription = this.route.params.subscribe(function (id) {
            if (null != id.id) {
                /**
                 *  Marvel
                 */
                if (id.id === 'Marvel') {
                    _this.router.navigateByUrl("blogPostDetail/marvel");
                }
                _this.giphyService.getGifs(id.id).subscribe(function (res) {
                    _this.gifs = res.json().data;
                    _this.blogPostService.getBlogPostsByTag(id.id).subscribe(function (res) {
                        _this.blogposts = res.json();
                    });
                });
            }
            else {
                _this.giphyService.getGifs("news").subscribe(function (res) {
                    _this.gifs = res.json().data;
                    _this.blogPostService.getBlogPosts().subscribe(function (res) {
                        _this.blogposts = res.json();
                    });
                });
            }
        });
    };
    BlogPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "news",
            template: __webpack_require__("../../../../../src/app/components/blogpost.component/blogpost.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blogpost.component/blogpost.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_blogpost_service__["a" /* BlogPostService */], __WEBPACK_IMPORTED_MODULE_0__services_giphy_service__["a" /* GiphyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_blogpost_service__["a" /* BlogPostService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__services_giphy_service__["a" /* GiphyService */]])
    ], BlogPostComponent);
    return BlogPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blogpost.component/blogpost.detail.component/blogpost.detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 1% 5%;\n\n  -ms-flex-pack: distribute;\n\n      justify-content: space-around;\n}\n\nh1 {\n  color: #0c8346;\n}\n\nlegend {\n  font-style: italic;\n  color: #2b4162;\n}\n\nul {\n  list-style: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\n.tag {\n  margin-right: 5px;\n  padding: 4px 8px;\n  color: white;\n  background: #2b4162;\n  border-radius: 4px;\n  text-decoration: none;\n}\n\n.tag:hover {\n  -webkit-transform: scale(1.1em);\n          transform: scale(1.1em);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blogpost.component/blogpost.detail.component/blogpost.detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1>{{blogpost.title}} {{id}}</h1>\n  <legend> {{blogpost.creationDate |date}}</legend>\n\n  <div [innerHTML]=\"blogpost.body\"></div>\n  <ul>\n    <li class=\"tag\" *ngFor=\"let tag of blogpost.tags\">\n      <a class=\"tag\" routerLink=\"/blogpost/{{tag.name}}\">{{tag.name}}</a>\n    </li>\n  </ul>\n\n\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/blogpost.component/blogpost.detail.component/blogpost.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_blogPost__ = __webpack_require__("../../../../../src/app/model/blogPost.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blogpost_service__ = __webpack_require__("../../../../../src/app/services/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogPostDetailComponent = /** @class */ (function () {
    function BlogPostDetailComponent(route, blogPostService) {
        this.route = route;
        this.blogPostService = blogPostService;
        this.blogpost = new __WEBPACK_IMPORTED_MODULE_0__model_blogPost__["a" /* BlogPost */]("", "", new Date(), [], {});
    }
    BlogPostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var suscription = this.route.params
            .switchMap(function (params) { return (_this.id = params["id"]); })
            .subscribe(function (board) {
            console.log("Ruta inicializada");
        });
        if (this.id === "marvel") {
            this.blogPostService.getBlogPostsByTag("Marvel").subscribe(function (res) {
                res.json().forEach(function (article) {
                    if (null === article.id) {
                        _this.blogpost = article;
                    }
                });
            });
        }
        else {
            this.blogPostService.getBlogPostById(this.id).subscribe(function (res) {
                _this.blogpost = res.json()[0];
            });
        }
    };
    BlogPostDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "blogpostDetail",
            template: __webpack_require__("../../../../../src/app/components/blogpost.component/blogpost.detail.component/blogpost.detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blogpost.component/blogpost.detail.component/blogpost.detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_blogpost_service__["a" /* BlogPostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_blogpost_service__["a" /* BlogPostService */]])
    ], BlogPostDetailComponent);
    return BlogPostDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/blogpost.component/my.blogposts.component/my.blogposts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\ntable {\n  width: 80%;\n}\n\ntr {\n  padding: 0% 2%;\n}\n\nth {\n  background: #2b4162;\n  color: white;\n  width: auto;\n  font-size: 1.4em;\n  text-align: center;\n}\n\ntd {\n  width: auto;\n  background-color: rgb(238, 238, 238);\n  font-size: 1.1em;\n  padding: 2px 20px;\n  text-align: center;\n}\n\n.btn-main {\n  padding: 10px 20px;\n  border-radius: 5px;\n  background: #0c8346;\n  color: white;\n  text-decoration: none;\n  border: none;\n}\n\n.delete {\n  background: #bd3039;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.btn-main:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blogpost.component/my.blogposts.component/my.blogposts.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <notifier-container></notifier-container>\n  <table>\n    <thead>\n      <th>Titulo</th>\n      <th>Fecha</th>\n      <th>Modificar</th>\n      <th>Borrar</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let blogpost of blogposts\">\n        <td>{{blogpost.title}}</td>\n        <td>{{blogpost.creationDate | date}}</td>\n        <td>\n          <button (click)=\"modifyBlogPost(blogpost.id)\" class=\"btn-main\">Modificar</button>\n        </td>\n        <td>\n          <button (click)=\"deleteBlogPost(blogpost.id)\" class=\"btn-main delete\">Borrar</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/blogpost.component/my.blogposts.component/my.blogposts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBlogPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_notifier__ = __webpack_require__("../../../../angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blogpost_service__ = __webpack_require__("../../../../../src/app/services/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyBlogPostsComponent = /** @class */ (function () {
    function MyBlogPostsComponent(router, blogPostService, userService, notifierService) {
        this.router = router;
        this.blogPostService = blogPostService;
        this.userService = userService;
        this.notifierService = notifierService;
    }
    MyBlogPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogPostService
            .getMyArticles(localStorage.getItem("email"))
            .subscribe(function (posts) {
            _this.blogposts = posts.json();
        });
    };
    MyBlogPostsComponent.prototype.modifyBlogPost = function (id) {
        this.router.navigate(["editBlogPost", id]);
    };
    MyBlogPostsComponent.prototype.deleteBlogPost = function (id) {
        var _this = this;
        console.log(id);
        this.blogPostService
            .deleteBlogPost(id, localStorage.getItem("token"))
            .subscribe(function (res) { return _this.router.navigateByUrl("blogpost"); }, function (err) {
            return _this.notifierService.notify("error", "Error borrandoe el artículo");
        });
    };
    MyBlogPostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "myblogpost",
            template: __webpack_require__("../../../../../src/app/components/blogpost.component/my.blogposts.component/my.blogposts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/blogpost.component/my.blogposts.component/my.blogposts.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_blogpost_service__["a" /* BlogPostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_blogpost_service__["a" /* BlogPostService */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0_angular_notifier__["b" /* NotifierService */]])
    ], MyBlogPostsComponent);
    return MyBlogPostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/create.blogpost.component/create.blogpost.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\nmain {\n  margin-top: 10px;\n  height: 90vh;\n}\nform{\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 1% 5%;\n}\nh1{\n\n  color: #0c8346;\n}\n.btn-main:hover{\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.center{\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n.btn-main{\n  padding: 20px 40px;\n  border-radius: 5px;\n  background: #0c8346;\n  color: white;\n  text-decoration: none;\n  border: none;\n}\nbutton:focus,input:focus{\n  outline: none;\n}\ninput{\n  border: none;\n  font-size: 1.2em;\n  border-bottom:#0c8346 solid 1px;\n  width: 50%;\n  color: rgba(0, 0, 0, 0.9);\n\n}\n.inline,label{\n\n  display : -webkit-inline-box;\n\n  display : -ms-inline-flexbox;\n\n  display : inline-flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create.blogpost.component/create.blogpost.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"sendForm()\" #createNews=\"ngForm\">\n    <notifier-container></notifier-container>\n    <h1>Crear noticia</h1>\n    <label>Nombre artículo</label>\n    <input [(ngModel)]=\"blogpost.title\" name=\"articleName\" type=\"text\" placeholder=\"\" />\n    <br/>\n    <div [froalaEditor]=\"options\" [(froalaModel)]=\"blogpost.body\"></div>\n    <br/>\n    <ul class=\"inline\">\n        <li class=\"inline\" *ngFor=\"let tag of tags\">\n            <label for=\"{{tag.name}}\">{{tag.name}}               \n                <input type=\"checkbox\" name=\"{{tag.name}}\" id=\"{{tag.name}}\" value=\"{{tag.name}}\" (click)=\"addTag(tag)\">\n            </label>\n        </li>\n    </ul>\n\n    <br/>\n    <button class=\"btn-main center\">{{buttonText}}</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/create.blogpost.component/create.blogpost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBlogPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_notifier__ = __webpack_require__("../../../../angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blogpost_service__ = __webpack_require__("../../../../../src/app/services/blogpost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tags_service__ = __webpack_require__("../../../../../src/app/services/tags.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_blogPost__ = __webpack_require__("../../../../../src/app/model/blogPost.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateBlogPostComponent = /** @class */ (function () {
    function CreateBlogPostComponent(blogPostService, tagsService, route, userService, router, notifierService) {
        this.blogPostService = blogPostService;
        this.tagsService = tagsService;
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.notifierService = notifierService;
        this.blogpost = new __WEBPACK_IMPORTED_MODULE_6__model_blogPost__["a" /* BlogPost */]("", "Escribe aqui", new Date(), [], {
            email: localStorage.getItem("email")
        });
        this.modifying = false;
        this.buttonText = "Crear BlogPost";
        this.options = {
            imageUpload: false,
            fileUpload: false,
            videoUpload: false,
            imagePaste: false
        };
    }
    CreateBlogPostComponent.prototype.sendForm = function () {
        if (this.blogpost.title === "" || this.blogpost.body === "") {
            this.notifierService.notify("error", "El articulo debe tener titulo y contenido");
            return;
        }
        if (this.modifying) {
            this.modify();
        }
        else {
            this.createBlogPost();
        }
    };
    CreateBlogPostComponent.prototype.modify = function () {
        var _this = this;
        this.blogPostService
            .modifyBlogPost(this.blogpost, localStorage.getItem("token"))
            .subscribe(function (res) { return _this.router.navigateByUrl("myblogposts"); }, function (err) { return _this.notifierService.notify("error", "Error en el server"); });
    };
    CreateBlogPostComponent.prototype.createBlogPost = function () {
        var _this = this;
        this.blogPostService
            .createBlogpost(this.blogpost, localStorage.getItem("token"))
            .subscribe(function (res) { return _this.router.navigateByUrl("myblogposts"); }, function (err) { return _this.notifierService.notify("error", "Error en el server"); });
    };
    CreateBlogPostComponent.prototype.addTag = function (tag) {
        if (!this.blogpost.tags.includes(tag)) {
            this.blogpost.tags.push(tag);
        }
        else {
            var pos = this.blogpost.tags.indexOf(tag);
            this.blogpost.tags.splice(pos, 1);
        }
        console.log(this.blogpost.tags);
    };
    CreateBlogPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var suscription = this.route.params.subscribe(function (id) {
            if (null != id.id) {
                _this.blogPostService.getBlogPostById(id.id).subscribe(function (res) {
                    _this.blogpost = res.json()[0];
                    _this.modifying = true;
                    _this.buttonText = "Modificar Blogpost";
                    _this.tagsService
                        .getTags()
                        .subscribe(function (tags) { return (_this.tags = tags.json()); });
                    _this.blogpost.tags = [];
                });
            }
            else {
                _this.tagsService.getTags().subscribe(function (tags) { return (_this.tags = tags.json()); });
            }
        });
    };
    CreateBlogPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: "createBlogpost",
            template: __webpack_require__("../../../../../src/app/components/create.blogpost.component/create.blogpost.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create.blogpost.component/create.blogpost.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_blogpost_service__["a" /* BlogPostService */], __WEBPACK_IMPORTED_MODULE_4__services_tags_service__["a" /* TagsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_blogpost_service__["a" /* BlogPostService */],
            __WEBPACK_IMPORTED_MODULE_4__services_tags_service__["a" /* TagsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0_angular_notifier__["b" /* NotifierService */]])
    ], CreateBlogPostComponent);
    return CreateBlogPostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login.component/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 1% 25%\n}\n\n.btn-main:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.center {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\nh1{\n  color: #0c8346;\n}\n\n.btn-main {\n  padding: 15px 10px;\n  border-radius: 5px;\n  background: #0c8346;\n  color: white;\n  text-decoration: none;\n  border: none;\n  width: 25%;\n}\n\nlabel{\n  font-size: 1.4em;\n  margin-bottom: 10px;\n}\n\nbutton:focus,\ninput:focus {\n  outline: none;\n}\n\ninput {\n  border: none;\n  font-size: 1.2em;\n  border-bottom: #0c8346 solid 1px;\n  width: 75%;\n  color: rgba(0, 0, 0, 0.9);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login.component/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"logUser()\" #login=\"ngForm\">\n  <notifier-container></notifier-container>\n  <h1>Iniciar sesión</h1>\n  <br/>\n  <label for=\"user\">Email</label>\n  <input [(ngModel)]=\"user\" type=\"email\" name=\"user\" placeholder=\"Email\">\n  <br/>\n  <label for=\"password\">Contraseña</label>\n  <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" placeholder=\"Contraseña\">\n  <br/>\n  <button class=\"btn-main\">Inciar Sesión</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login.component/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_notifier__ = __webpack_require__("../../../../angular-notifier/esm5/angular-notifier.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, notifierService) {
        this.userService = userService;
        this.router = router;
        this.notifierService = notifierService;
        this.user = "";
        this.password = "";
    }
    LoginComponent.prototype.logUser = function () {
        var _this = this;
        if (this.user == "" || this.password == "") {
            this.notifierService.notify("error", "Introduzca usuario y contraseña");
        }
        else {
            this.userService.login(this.user, this.password).subscribe(function (res) {
                if (res.json().token != null) {
                    var response = res.json();
                    localStorage.setItem("token", response.token);
                    localStorage.setItem("email", response.email);
                    _this.router.navigateByUrl("/myblogposts");
                }
            }, function (err) {
                _this.notifierService.notify("error", "Usuario inexistente");
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "login",
            template: __webpack_require__("../../../../../src/app/components/login.component/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login.component/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular_notifier__["b" /* NotifierService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/router.module/router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_blogpost_component_create_blogpost_component__ = __webpack_require__("../../../../../src/app/components/create.blogpost.component/create.blogpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blogpost_component_blogpost_component__ = __webpack_require__("../../../../../src/app/components/blogpost.component/blogpost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blogpost_component_blogpost_detail_component_blogpost_detail_component__ = __webpack_require__("../../../../../src/app/components/blogpost.component/blogpost.detail.component/blogpost.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blogpost_component_my_blogposts_component_my_blogposts_component__ = __webpack_require__("../../../../../src/app/components/blogpost.component/my.blogposts.component/my.blogposts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_component_login_component__ = __webpack_require__("../../../../../src/app/components/login.component/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sign_up_component_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign.up.component/sign.up.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: "", redirectTo: "blogpost", pathMatch: "full" },
    { path: "blogpost/:id", component: __WEBPACK_IMPORTED_MODULE_2__blogpost_component_blogpost_component__["a" /* BlogPostComponent */] },
    { path: "blogpost", component: __WEBPACK_IMPORTED_MODULE_2__blogpost_component_blogpost_component__["a" /* BlogPostComponent */] },
    { path: "blogpost/:id", component: __WEBPACK_IMPORTED_MODULE_2__blogpost_component_blogpost_component__["a" /* BlogPostComponent */] },
    {
        path: "createBlogPost",
        component: __WEBPACK_IMPORTED_MODULE_1__create_blogpost_component_create_blogpost_component__["a" /* CreateBlogPostComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]]
    },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_7__login_component_login_component__["a" /* LoginComponent */] },
    {
        path: "myblogposts",
        component: __WEBPACK_IMPORTED_MODULE_4__blogpost_component_my_blogposts_component_my_blogposts_component__["a" /* MyBlogPostsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]]
    },
    { path: "signUp", component: __WEBPACK_IMPORTED_MODULE_8__sign_up_component_sign_up_component__["a" /* SignUpComponent */] },
    {
        path: "editBlogPost/:id",
        component: __WEBPACK_IMPORTED_MODULE_1__create_blogpost_component_create_blogpost_component__["a" /* CreateBlogPostComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]]
    },
    { path: "blogPostDetail/:id", component: __WEBPACK_IMPORTED_MODULE_3__blogpost_component_blogpost_detail_component_blogpost_detail_component__["a" /* BlogPostDetailComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/sign.up.component/sign.up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 1% 25%\n}\n\n.btn-main:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.center {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\nh1{\n  color: #0c8346;\n}\n\n.btn-main {\n  padding: 15px 10px;\n  border-radius: 5px;\n  background: #0c8346;\n  color: white;\n  text-decoration: none;\n  border: none;\n  width: 25%;\n}\n\nlabel{\n  font-size: 1.4em;\n  margin-bottom: 10px;\n}\n\nbutton:focus,\ninput:focus {\n  outline: none;\n}\n\ninput {\n  border: none;\n  font-size: 1.2em;\n  border-bottom: #0c8346 solid 1px;\n  width: 75%;\n  color: rgba(0, 0, 0, 0.9);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign.up.component/sign.up.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"createUser()\" #signUp=\"ngForm\">\n  <notifier-container></notifier-container>\n  <h1>Crear Usuario</h1>\n  <br/>\n  <label for=\"user\">Usuario</label>\n  <input [(ngModel)]=\"user\" type=\"text\" name=\"user\" placeholder=\"Usuario\">\n  <br/>\n  <label for=\"user\">Email</label>\n  <input [(ngModel)]=\"email\" type=\"email\" name=\"email\" placeholder=\"Usuario\">\n  <br/>\n  <label for=\"password\">Contraseña</label>\n  <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" placeholder=\"Contraseña\">\n  <br/>\n  <label for=\"password\">Repetir contraseña</label>\n  <input [(ngModel)]=\"repeatPassword\" type=\"password\" name=\"password\" placeholder=\"Contraseña\">\n  <br/>\n  <button class=\"btn-main\">Inciar Sesión</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/sign.up.component/sign.up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_notifier__ = __webpack_require__("../../../../angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService, router, notifierService) {
        this.userService = userService;
        this.router = router;
        this.notifierService = notifierService;
        this.email = "";
        this.user = "";
        this.password = "";
        this.repeatPassword = "";
    }
    SignUpComponent.prototype.createUser = function () {
        var _this = this;
        if (this.validateEmail() == false || this.checkPasswords() == false) {
            return;
        }
        this.userService
            .signUp(this.user, this.password, this.email)
            .subscribe(function (res) { return _this.router.navigateByUrl("login"); }, function (err) { return _this.notifierService.notify("error", "Error en el server"); });
    };
    SignUpComponent.prototype.checkPasswords = function () {
        if (this.password != this.repeatPassword) {
            this.notifierService.notify("error", "Las contraseñas tienen que coincidir");
            this.repeatPassword = "";
            this.password = "";
            return false;
        }
        return true;
    };
    SignUpComponent.prototype.validateEmail = function () {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(this.email.toLowerCase()) == false) {
            this.notifierService.notify("error", "Mail invalido");
            return false;
        }
        return true;
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "signUp",
            template: __webpack_require__("../../../../../src/app/components/sign.up.component/sign.up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sign.up.component/sign.up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0_angular_notifier__["b" /* NotifierService */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/blogPost.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPost; });
var BlogPost = /** @class */ (function () {
    function BlogPost(title, body, creationDate, tags, creator, id) {
        if (id === void 0) { id = null; }
        this.title = title;
        this.body = body;
        this.creationDate = creationDate;
        this.tags = tags;
        this.creator = creator;
        this.id = id;
    }
    return BlogPost;
}());



/***/ }),

/***/ "../../../../../src/app/services/blogpost.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogPostService = /** @class */ (function () {
    function BlogPostService(http) {
        this.http = http;
        this.endpoint = "https://156.35.98.44:9090/";
    }
    BlogPostService.prototype.createBlogpost = function (blogPost, token) {
        var options = this.getHeadersWithToken(token);
        return this.http.post(this.endpoint + "api/blogpost", blogPost, options);
    };
    BlogPostService.prototype.getBlogPosts = function () {
        return this.http.get(this.endpoint + "blogpost");
    };
    BlogPostService.prototype.getBlogPostById = function (id) {
        return this.http.get(this.endpoint + "/blogpost?id=" + id);
    };
    BlogPostService.prototype.getMyArticles = function (userEmail) {
        return this.http.get(this.endpoint + "/blogpost?creatorEmail=" + userEmail);
    };
    BlogPostService.prototype.modifyBlogPost = function (blogpost, token) {
        var options = this.getHeadersWithToken(token);
        return this.http.put(this.endpoint + "api/blogpost", blogpost, options);
    };
    BlogPostService.prototype.getBlogPostsByTag = function (id) {
        return this.http.get(this.endpoint + ("blogpost?tags=" + id));
    };
    BlogPostService.prototype.deleteBlogPost = function (id, token) {
        var options = this.getHeadersWithToken(token);
        return this.http.delete(this.endpoint + "api/blogpost/" + id, options);
    };
    BlogPostService.prototype.getHeadersWithToken = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ "jwt-auth": token });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    BlogPostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], BlogPostService);
    return BlogPostService;
}());



/***/ }),

/***/ "../../../../../src/app/services/giphy.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiphyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GiphyService = /** @class */ (function () {
    function GiphyService(http) {
        this.http = http;
        this.apyKey = "vwrLqQ0gL2ljgKQGpWgP3fB0OOY3qVSu";
        this.endpoint = "https://api.giphy.com";
    }
    GiphyService.prototype.getGifs = function (tag) {
        return this.http.get(this.endpoint + "/v1/gifs/search?api_key=" + this.apyKey + "&q=" + tag + "}");
    };
    GiphyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], GiphyService);
    return GiphyService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tags.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagsService = /** @class */ (function () {
    function TagsService(http) {
        this.http = http;
        this.endpoint = "https://156.35.98.44:9090/";
    }
    TagsService.prototype.getTags = function () {
        return this.http.get(this.endpoint);
    };
    TagsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.endpoint = "https://156.35.98.44:9090/";
        console.log("Me creo");
    }
    UserService.prototype.login = function (user, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ Email: btoa(user), Password: btoa(password) });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.endpoint + "/api/auth/login", {}, options);
    };
    UserService.prototype.closeSession = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };
    UserService.prototype.signUp = function (user, password, email) {
        return this.http.post(this.endpoint + "/user", {
            name: user,
            password: password,
            email: email
        });
    };
    UserService.prototype.canActivate = function () {
        if (localStorage.getItem("token") == null) {
            this.router.navigate(["/login"]);
        }
        return localStorage.getItem("token") != null;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map