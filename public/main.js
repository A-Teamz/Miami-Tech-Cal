(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .homePage {\r\n  margin: 0;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n#calendarTitle {\r\n  font-size: 400px;\r\n}\r\n\r\n#techCalendar {\r\n  margin-left: 8%;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\n.commentsForm {\r\n  float: right;\r\n  \r\n} */\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"homePage\">\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">Tech Events<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Events</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">News</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">About</a>\r\n        </li>\r\n      </ul>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n  <div class=\"container-fluid\">\r\n    <div id=\"header\">\r\n      <h1>Miami Tech Calendar</h1>\r\n    </div>\r\n    \r\n    <div id=\"techCalendar\">\r\n      <br>\r\n      <iframe src=\"https://calendar.google.com/calendar/embed?src=techcalendermia%40gmail.com&ctz=America%2FNew_York\" style=\"border: 0\" width=\"1320\" height=\"800\" frameborder=\"0\" scrolling=\"no\"></iframe>\r\n      <br>\r\n    </div>\r\n\r\n    <app-comments></app-comments>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/comments.service */ "./src/app/services/comments.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/comments/comments.component */ "./src/app/components/comments/comments.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)
            ],
            providers: [_services_comments_service__WEBPACK_IMPORTED_MODULE_4__["CommentsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/comments/comments.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/comments/comments.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/comments/comments.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/comments/comments.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n        <form (ngSubmit)=\"addNew()\">\r\n            <h3>Join the conversation</h3>\r\n            \r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"inputDefault\">Name: </label>\r\n              <br>\r\n              <input [(ngModel)]=\"theNewEntry.title\" name=\"blah\" type=\"text\" class=\"form-control\" id=\"inputDefault\">\r\n            </div>\r\n            \r\n            <br>\r\n            \r\n            <div class=\"form-group\">\r\n              <label for=\"exampleTextarea\">Comments: </label>\r\n              <br>\r\n              <textarea  [(ngModel)]=\"theNewEntry.content\" class=\"form-control nameArea\" id=\"exampleTextarea\" name=\"blah\" cols=\"5\" rows=\"5\"></textarea>\r\n            </div>\r\n            \r\n            <button class=\"btn btn-outline-secondary\">Submit</button>\r\n            \r\n          </form>\r\n    </div>\r\n\r\n<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n  <div *ngFor=\"let oneEntry of entries; let i = index\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-12 \" id=\"calendarEntry\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n            \r\n                <h3>{{oneEntry.title}}</h3>\r\n                <p>{{oneEntry.content}}</p>\r\n      \r\n              <div *ngIf=\"oneEntry.owner === loggedInUser.googleID \">\r\n                <button class=\"btn btn-outline-primary btn-sm btn-space\" (click)=\"showEditForm(i)\">Edit</button>\r\n                <button class=\"btn btn-outline-danger btn-sm\" (click)=\"deletePost(oneEntry._id)\">Delete</button>\r\n              <br>\r\n              <br>\r\n            </div>\r\n            </div>\r\n      \r\n        <form (ngSubmit)=\"doTheUpdate(oneEntry._id, myForm)\" #myForm=\"ngForm\" *ngIf=\"show === i\">\r\n          <label for=\"title-input\"> Updated Name: </label>\r\n            <input id=\"title-input\" type=\"text\" [(ngModel)]=\"oneEntry.title\" name=\"title\">\r\n            <br>\r\n            <br>\r\n          <label for=\"content-input\"> Updated Comments: </label>\r\n          <input id=\"content-input\" type=\"text\"  [(ngModel)]=\"oneEntry.content\" name=\"content\" >\r\n            <br>\r\n          <button type=\"submit\">Save Changes</button>\r\n        </form>\r\n      \r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n    \r\n</div>\r\n\r\n\r\n<br>\r\n<br>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/comments/comments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_comments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/comments.service */ "./src/app/services/comments.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(theService, myRouter) {
        this.theService = theService;
        this.myRouter = myRouter;
        this.entries = [];
        this.oneEntry = {};
        this.theNewEntry = {};
        this.theEntryToBeDeleted = {};
        this.loggedInUser = {};
        this.updatedComment = {};
        this.show = false;
    }
    CommentsComponent.prototype.addNew = function () {
        var _this = this;
        this.theService.addNewEntry(this.theNewEntry)
            .toPromise()
            .then(function () {
            _this.theNewEntry = {};
            _this.getEntries();
        })
            .catch(function (err) { return console.log('the err in comments: ', err); });
    };
    CommentsComponent.prototype.getEntries = function () {
        var _this = this;
        this.theService.getEntries()
            .subscribe(function (res) {
            // console.log('entries: ', res)
            _this.entries = res.reverse();
        });
    };
    ;
    // this is comment
    CommentsComponent.prototype.deletePost = function (oneEntryId) {
        var _this = this;
        console.log("oneEntryId: ", oneEntryId);
        // oneEntry = this.theEntryToBeDeleted
        this.theService.deleteEntry(oneEntryId)
            .subscribe(function (ObjFromApi) {
            _this.getEntries();
        });
    };
    ;
    CommentsComponent.prototype.doTheUpdate = function (oneEntryId, formData) {
        console.log('oneEntryId = = = =  =', oneEntryId);
        var formInfo = formData.form.controls;
        this.title = formInfo.title.value;
        this.content = formInfo.content.value;
        console.log("=============== id: ", this.title, this.content);
        this.sendUpdatesToApi(oneEntryId);
    };
    ;
    CommentsComponent.prototype.sendUpdatesToApi = function (oneEntryId) {
        var _this = this;
        console.log('this.oneEntry.title:', this.title);
        this.updatedComment = { title: this.title, content: this.content };
        console.log("updates:", this.updatedComment);
        this.theService.updateComment(oneEntryId, this.updatedComment)
            .toPromise()
            .then(function () {
            _this.myRouter.navigate(['/']);
        })
            .catch(function (err) { return err.json(); });
    };
    ;
    CommentsComponent.prototype.showEditForm = function (index) {
        if (this.show === index) {
            this.show = false;
        }
        else {
            this.show = index;
        }
    };
    ;
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEntries();
        this.theService.checkIfLoggedIn()
            .toPromise()
            .then(function (theUser) {
            console.log('who is logged in: ', theUser);
            _this.loggedInUser = theUser;
        })
            .catch(function (err) { return console.log('Error in check logon in comments: ', err); });
    };
    ;
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/components/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/components/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [_services_comments_service__WEBPACK_IMPORTED_MODULE_1__["CommentsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/services/comments.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/comments.service.ts ***!
  \**********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/Rx';

// import 'rxjs/add/operator/catch';

var CommentsService = /** @class */ (function () {
    function CommentsService(myHttp) {
        this.myHttp = myHttp;
    }
    CommentsService.prototype.getEntries = function () {
        return this.myHttp.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + "/api/comments")
            .map(function (responseThingy) { return responseThingy.json(); });
    };
    CommentsService.prototype.addNewEntry = function (theWholeEntryObject) {
        return this.myHttp.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + "/api/comments", theWholeEntryObject, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.getOneEntry = function (theIdOfTheEntry) {
        return this.myHttp.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + "/api/comments/" + theIdOfTheEntry, { withCredentials: true })
            .map(function (responseThingy) { return responseThingy.json(); });
    };
    CommentsService.prototype.deleteEntry = function (theIdOfTheEntry) {
        return this.myHttp.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + "/api/comments/" + theIdOfTheEntry + "/delete", {}, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.updateComment = function (theIdOfTheEntry, updates) {
        console.log('what: ', updates);
        return this.myHttp.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + "/api/comments/" + theIdOfTheEntry, updates, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    CommentsService.prototype.checkIfLoggedIn = function () {
        return this.myHttp.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBase + "/api/loggedin", { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    CommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBase: "http://localhost:3000"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\David\ironHack\final-proj\starter-code\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map