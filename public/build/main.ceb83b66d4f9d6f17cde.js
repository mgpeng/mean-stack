webpackJsonp([3],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var articles_service_1 = __webpack_require__(50);
var ArticlesComponent = (function () {
    function ArticlesComponent(_as) {
        this._as = _as;
        console.log('cp2 inside ArticlesComponent');
    }
    return ArticlesComponent;
}());
ArticlesComponent = __decorate([
    core_1.Component({
        selector: 'articles',
        template: "<router-outlet></router-outlet>"
    }),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesComponent);
exports.ArticlesComponent = ArticlesComponent;


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var articles_service_1 = __webpack_require__(50);
var CreateComponent = (function () {
    function CreateComponent(_router, _injector, _articlesService) {
        this._router = _router;
        this._injector = _injector;
        this._articlesService = _articlesService;
        this.article = {};
        this.errorMessage = '';
        debugger;
        console.log('cp2 inside CreateComponent');
        console.log(_injector);
    }
    CreateComponent.prototype.create = function () {
        var _this = this;
        this._articlesService
            .create(this.article)
            .subscribe(function (createdArticle) { return _this._router.navigate(['/articles', createdArticle._id]); }, function (error) { return _this.errorMessage = error; });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    core_1.Component({
        selector: 'create',
        template: __webpack_require__(392)
    }),
    __metadata("design:paramtypes", [router_1.Router, core_1.Injector,
        articles_service_1.ArticlesService])
], CreateComponent);
exports.CreateComponent = CreateComponent;


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var articles_service_1 = __webpack_require__(50);
var EditComponent = (function () {
    function EditComponent(_router, _route, _articlesService) {
        this._router = _router;
        this._route = _route;
        this._articlesService = _articlesService;
        this.article = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsObserver = this._route.params.subscribe(function (params) {
            var articleId = params['articleId'];
            _this._articlesService.read(articleId).subscribe(function (article) {
                _this.article = article;
            }, function (error) { return _this._router.navigate(['/articles']); });
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.paramsObserver.unsubscribe();
    };
    EditComponent.prototype.update = function () {
        var _this = this;
        this._articlesService
            .update(this.article)
            .subscribe(function (savedArticle) { return _this._router.navigate(['/articles', savedArticle._id]); }, function (error) { return _this.errorMessage = error; });
    };
    return EditComponent;
}());
EditComponent = __decorate([
    core_1.Component({
        selector: 'edit',
        template: __webpack_require__(393)
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        articles_service_1.ArticlesService])
], EditComponent);
exports.EditComponent = EditComponent;


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var articles_service_1 = __webpack_require__(50);
var ListComponent = (function () {
    function ListComponent(_articlesService) {
        this._articlesService = _articlesService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articlesService.list().subscribe(function (articles) { return _this.articles = articles; });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'list',
        template: __webpack_require__(394)
    }),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ListComponent);
exports.ListComponent = ListComponent;


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var authentication_service_1 = __webpack_require__(51);
var articles_service_1 = __webpack_require__(50);
var ViewComponent = (function () {
    function ViewComponent(_router, _route, _authenticationService, _articlesService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._articlesService = _articlesService;
        this.allowEdit = false;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._authenticationService.user;
        this.paramsObserver = this._route.params.subscribe(function (params) {
            var articleId = params['articleId'];
            _this._articlesService
                .read(articleId)
                .subscribe(function (article) {
                _this.article = article;
                _this.allowEdit = (_this.user && _this.user._id === _this.article.creator._id);
            }, function (error) { return _this._router.navigate(['/articles']); });
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.paramsObserver.unsubscribe();
    };
    ViewComponent.prototype.delete = function () {
        var _this = this;
        this._articlesService.delete(this.article._id)
            .subscribe(function (deletedArticle) { return _this._router.navigate(['/articles']); }, function (error) { return _this.errorMessage = error; });
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    core_1.Component({
        selector: 'view',
        template: __webpack_require__(395),
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        articles_service_1.ArticlesService])
], ViewComponent);
exports.ViewComponent = ViewComponent;


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_service_1 = __webpack_require__(75);
var core_1 = __webpack_require__(3);
var AuthenticationComponent = (function () {
    function AuthenticationComponent(_logger) {
        this._logger = _logger;
        _logger.showAllLogs();
    }
    return AuthenticationComponent;
}());
AuthenticationComponent = __decorate([
    core_1.Component({
        selector: 'authentication',
        template: __webpack_require__(396)
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], AuthenticationComponent);
exports.AuthenticationComponent = AuthenticationComponent;
// templateUrl: 'app/authentication/authentication.component.html' 


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var authentication_service_1 = __webpack_require__(51);
var logger_service_1 = __webpack_require__(75);
var SigninComponent = (function () {
    function SigninComponent(_authenticationService, _router, _logger) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this._logger = _logger;
        this.credentials = {};
        _logger.showAllLogs();
    }
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this._logger.showLastLog();
        this._authenticationService.signin(this.credentials)
            .subscribe(function (result) { return _this._router.navigate(['/']); }, function (error) { return _this.errorMessage = error; });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    core_1.Component({
        selector: 'signin',
        template: __webpack_require__(397)
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.Router,
        logger_service_1.LoggerService])
], SigninComponent);
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var authentication_service_1 = __webpack_require__(51);
var logger_service_1 = __webpack_require__(75);
var SignupComponent = (function () {
    function SignupComponent(_authenticationService, _router, _loger) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this._loger = _loger;
        this.user = {};
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this._loger.showLastLog();
        this._authenticationService.signup(this.user)
            .subscribe(function (result) { return _this._router.navigate(['/']); }, function (error) { return _this.errorMessage = error; });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: 'signup',
        template: __webpack_require__(398),
        providers: [logger_service_1.LoggerService]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        router_1.Router,
        logger_service_1.LoggerService])
], SignupComponent);
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var chat_service_1 = __webpack_require__(142);
var ChatComponent = (function () {
    function ChatComponent(_chatService) {
        this._chatService = _chatService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = new Array();
        this._chatService.on('chatMessage', function (msg) {
            _this.messages.push(msg);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var message = { text: this.messageText };
        this._chatService.emit('chatMessage', message);
        this.messageText = '';
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this._chatService.removeListener('chatMessage');
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat',
        template: __webpack_require__(399),
        providers: [chat_service_1.ChatService]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var authentication_service_1 = __webpack_require__(51);
var io = __webpack_require__(132);
var ChatService = (function () {
    function ChatService(_router, _authenticationService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
        if (this._authenticationService.isLoggedIn()) {
            this.socket = io();
        }
        else {
            this._router.navigate(['home']);
        }
    }
    ChatService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    ChatService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    ChatService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    ;
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, authentication_service_1.AuthenticationService])
], ChatService);
exports.ChatService = ChatService;


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var authentication_service_1 = __webpack_require__(51);
var HomeComponent = (function () {
    function HomeComponent(_authenticationService) {
        this._authenticationService = _authenticationService;
        this.user = _authenticationService.user;
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: __webpack_require__(400),
        styles: [__webpack_require__(403)]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var RouteStudyComponent = (function () {
    function RouteStudyComponent() {
    }
    return RouteStudyComponent;
}());
RouteStudyComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'route-study',
        template: "\n    <nav>\n      <a routerLink=\"rshome\" routerLinkActive=\"active\">rshome</a>\n      <a routerLink=\"product\" routerLinkActive=\"active\">product</a>\n      <a routerLink=\"product/list\" routerLinkActive=\"active\">product/list</a>\n      <a routerLink=\"product/detail\" routerLinkActive=\"active\">product/detail</a>\n      <a routerLink=\"product/detail/item\" routerLinkActive=\"active\">product/detail/item</a>\n      <a routerLink=\"product/item2\" routerLinkActive=\"active\">product/detail/item2</a>\n    </nav>\n    <router-outlet></router-outlet>\n\n  "
    })
], RouteStudyComponent);
exports.RouteStudyComponent = RouteStudyComponent;


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var platform_browser_1 = __webpack_require__(43);
var forms_1 = __webpack_require__(57);
var http_1 = __webpack_require__(74);
var core_module_1 = __webpack_require__(259);
var app_routing_module_1 = __webpack_require__(251);
var authentication_module_1 = __webpack_require__(256);
var home_module_1 = __webpack_require__(261);
var articles_module_1 = __webpack_require__(254);
var route_study_module_1 = __webpack_require__(263);
var chat_module_1 = __webpack_require__(258);
// import { AuthenticationService } from './services/authentication.service';  
// import { ArticlesService } from './services/articles.service';
var app_component_1 = __webpack_require__(252);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule,
            core_module_1.CoreModule,
            chat_module_1.ChatModule,
            articles_module_1.ArticlesModule,
            authentication_module_1.AuthenticationModule,
            home_module_1.HomeModule,
            route_study_module_1.RouteStudyModule,
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
exports.AppRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.AppRoutes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
// import '../style.css';
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.name = 'Angular';
        console.log("cp1");
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n            <a routerLink=\"route-study\" class=\"strong\">Route study</a>\n            <a routerLink=\"home\" class=\"strong\">Home</a>\n            <a routerLink=\"authentication\" class=\"strong\">Authentication</a>\n            <a routerLink=\"chat\" class=\"strong\">Chat</a>\n            <div class=\"highlight\">\n               <router-outlet></router-outlet>\n            </div>\n  ",
        styles: [__webpack_require__(402)]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var articles_component_1 = __webpack_require__(133);
var create_component_1 = __webpack_require__(134);
var list_component_1 = __webpack_require__(136);
var view_component_1 = __webpack_require__(137);
var edit_component_1 = __webpack_require__(135);
exports.ArticlesRoutes = [
    {
        path: 'articles',
        component: articles_component_1.ArticlesComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':articleId', component: view_component_1.ViewComponent },
            { path: ':articleId/edit', component: edit_component_1.EditComponent }
        ]
    }
];
var ArticlesRoutingModule = (function () {
    function ArticlesRoutingModule() {
    }
    return ArticlesRoutingModule;
}());
ArticlesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(exports.ArticlesRoutes)],
        exports: [router_1.RouterModule]
    })
], ArticlesRoutingModule);
exports.ArticlesRoutingModule = ArticlesRoutingModule;


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { ArticlesService } from '../services/articles.service';
var core_1 = __webpack_require__(3);
var common_1 = __webpack_require__(35);
var forms_1 = __webpack_require__(57);
var articles_routing_module_1 = __webpack_require__(253);
var articles_component_1 = __webpack_require__(133);
var create_component_1 = __webpack_require__(134);
var list_component_1 = __webpack_require__(136);
var view_component_1 = __webpack_require__(137);
var edit_component_1 = __webpack_require__(135);
var ArticlesModule = (function () {
    function ArticlesModule() {
    }
    return ArticlesModule;
}());
ArticlesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            articles_routing_module_1.ArticlesRoutingModule
        ],
        declarations: [
            articles_component_1.ArticlesComponent,
            create_component_1.CreateComponent,
            list_component_1.ListComponent,
            view_component_1.ViewComponent,
            edit_component_1.EditComponent,
        ]
    })
], ArticlesModule);
exports.ArticlesModule = ArticlesModule;


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var authentication_component_1 = __webpack_require__(138);
var signin_component_1 = __webpack_require__(139);
// import { SigninComponent } from './signin.component';
var signup_component_1 = __webpack_require__(140);
exports.AuthenticationRoutes = [{
        path: 'authentication',
        component: authentication_component_1.AuthenticationComponent,
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent }
        ]
    }];
var AuthenticationRoutingModule = (function () {
    function AuthenticationRoutingModule() {
    }
    return AuthenticationRoutingModule;
}());
AuthenticationRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(exports.AuthenticationRoutes)],
        exports: [router_1.RouterModule]
    })
], AuthenticationRoutingModule);
exports.AuthenticationRoutingModule = AuthenticationRoutingModule;


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var common_1 = __webpack_require__(35);
var forms_1 = __webpack_require__(57);
var authentication_routing_module_1 = __webpack_require__(255);
var authentication_component_1 = __webpack_require__(138);
var signin_component_1 = __webpack_require__(139);
// import { SigninComponent } from './signin.component';
var signup_component_1 = __webpack_require__(140);
var logger_service_1 = __webpack_require__(75);
var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            authentication_routing_module_1.AuthenticationRoutingModule,
        ],
        declarations: [
            authentication_component_1.AuthenticationComponent,
            signin_component_1.SigninComponent,
            signup_component_1.SignupComponent,
        ],
        providers: [logger_service_1.LoggerService]
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var chat_component_1 = __webpack_require__(141);
exports.chatRoutes = [{
        path: 'chat',
        component: chat_component_1.ChatComponent
    }];
var ChatRoutingModule = (function () {
    function ChatRoutingModule() {
    }
    return ChatRoutingModule;
}());
ChatRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(exports.chatRoutes)],
        exports: [router_1.RouterModule]
    })
], ChatRoutingModule);
exports.ChatRoutingModule = ChatRoutingModule;


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var common_1 = __webpack_require__(35);
var forms_1 = __webpack_require__(57);
var chat_routing_module_1 = __webpack_require__(257);
var chat_service_1 = __webpack_require__(142);
var chat_component_1 = __webpack_require__(141);
var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            chat_routing_module_1.ChatRoutingModule
        ],
        declarations: [
            chat_component_1.ChatComponent,
        ],
        providers: [
            chat_service_1.ChatService
        ]
    })
], ChatModule);
exports.ChatModule = ChatModule;


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var authentication_service_1 = __webpack_require__(51);
var articles_service_1 = __webpack_require__(50);
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [],
        providers: [
            authentication_service_1.AuthenticationService,
            articles_service_1.ArticlesService
        ]
    })
], CoreModule);
exports.CoreModule = CoreModule;


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var home_component_1 = __webpack_require__(143);
exports.HomeRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(exports.HomeRoutes)],
        exports: [router_1.RouterModule]
    })
], HomeRoutingModule);
exports.HomeRoutingModule = HomeRoutingModule;


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var common_1 = __webpack_require__(35);
var home_routing_module_1 = __webpack_require__(260);
var home_component_1 = __webpack_require__(143);
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            home_routing_module_1.HomeRoutingModule,
        ],
        declarations: [
            home_component_1.HomeComponent,
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var route_study_component_1 = __webpack_require__(144);
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var routes = [
    { path: 'route-study',
        // outlet: 'product',
        component: route_study_component_1.RouteStudyComponent,
        children: [
            { path: 'rshome',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(1).then((function (require) { resolve(__webpack_require__(692)['RSHomeModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
            { path: 'product',
                loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(0).then((function (require) { resolve(__webpack_require__(691)['ProductModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
        ]
    }
];
var RouteStudyRoutingModule = (function () {
    function RouteStudyRoutingModule() {
    }
    return RouteStudyRoutingModule;
}());
RouteStudyRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], RouteStudyRoutingModule);
exports.RouteStudyRoutingModule = RouteStudyRoutingModule;
// ,
//   { path: '**', redirectTo: '', pathMatch: 'full' }, 


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var platform_browser_1 = __webpack_require__(43);
var route_study_routing_module_1 = __webpack_require__(262);
var route_study_component_1 = __webpack_require__(144);
// import { RSHomeModule } from './rshome/rshome.module';
// import { ProductModule } from './product/product.module';
// import { DetailModule } from './product/detail/detail.module';
// import { ListModule } from './product/list/list.module';
// import { ItemModule } from './product/detail/item/item.module';
// import { Item2Module } from  './product/detail/item2/item2.module';
var RouteStudyModule = (function () {
    function RouteStudyModule() {
    }
    return RouteStudyModule;
}());
RouteStudyModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            // RSHomeModule,
            // ProductModule,
            // DetailModule,
            // ListModule,
            // ItemModule,
            // Item2Module
            route_study_routing_module_1.RouteStudyRoutingModule,
        ],
        declarations: [
            route_study_component_1.RouteStudyComponent,
        ],
        providers: []
    })
], RouteStudyModule);
exports.RouteStudyModule = RouteStudyModule;


/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<h1>New Article</h1>\n<form (ngSubmit)=\"create()\" novalidate>\n  <div>\n    <label for=\"title\">Title</label>\n    <div>\n      <input type=\"text\" required [(ngModel)]=\"article.title\" name=\"title\" placeholder=\"Title\">\n    </div>\n  </div>\n  <div>\n    <label for=\"content\">Content</label>\n    <div>\n      <textarea type=\"text\" required cols=\"30\" rows=\"10\" \n             [(ngModel)]=\"article.content\" name=\"content\" \n             placeholder=\"Content\"></textarea>\n    </div>\n  </div>\n  <div>\n    <input type=\"submit\">\n  </div>\n \n  <strong *ngIf=\"errorMessage!=''\" id=\"error\">{{errorMessage}}</strong>\n</form>";

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<h1>Edit Article</h1>\n<form (ngSubmit)=\"update()\" novalidate>\n    <div>\n        <label for=\"title\">Title</label>\n        <div>\n            <input type=\"text\" required \n                   [(ngModel)]=\"article.title\" \n                   name=\"title\" \n                   placeholder=\"Title\">\n        </div>\n    </div>\n    <div>\n        <label for=\"content\">Content</label>\n    <div>\n        <textarea type=\"text\" required cols=\"30\" rows=\"10\" \n                      [(ngModel)]=\"article.content\" \n                      name=\"content\" \n                      placeholder=\"Content\"></textarea>\n    </div>\n    </div>\n    <div>\n        <input type=\"submit\" value=\"Update\">\n    </div>\n    \n    <strong>{{errorMessage}}</strong>\n</form>";

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<h1>Articles</h1>\n<ul>\n  <li *ngFor=\"let article of articles\">\n    <a [routerLink]=\"['/articles', article._id]\">{{article.title}}</a>\n    <br>\n    <small>{{article.created}}/{{article.creator.fullName}}</small>\n    <p>{{article.content}}</p>\n  </li>\n</ul>\n\n<div *ngIf=\"articles && articles.length === 0\">\n  No articles yet, why don't you <a [routerLink]=\"['/articles/create']\">create one</a>? \n</div>";

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"article && article.creator\">\n  <h1>{{article.title}}</h1>\n\n  <div *ngIf=\"allowEdit\">\n      <a [routerLink]=\"['/articles', article._id, 'edit']\">edit</a>\n      <button (click)=\"delete()\">delete</button>\n  </div>\n  <small>\n      <em>Posted on {{article.created}} by {{article.creator.fullName}}</em>\n  </small>\n\n  <p>{{article.content}}</p>\n</section>";

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<div>\n  <a href=\"/api/oauth/google\">Sign in with Google</a>\n  <a href=\"/api/oauth/facebook\">Sign in with Facebook</a>\n  <a href=\"/api/oauth/twitter\">Sign in with Twitter</a>\n  <router-outlet></router-outlet>\n</div>\n";

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"signin()\">\n  <div>\n    <label>Username:</label>\n    <input type=\"text\" [(ngModel)]=\"credentials.username\" name=\"username\">\n  </div>\n  <div>\n    <label>Password:</label>\n    <input type=\"password\" [(ngModel)]=\"credentials.password\" name=\"password\">\n  </div>\n  <div>\n    <input type=\"submit\" value=\"Sign In\">\n  </div>\n  <span>{{errorMessage}}</span>\n</form>";

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"signup()\">\n  <div>\n  <label>First Name:</label>\n    <input type=\"text\" [(ngModel)]=\"user.firstName\" name=\"firstName\">\n  </div>\n  <div>\n    <label>Last Name:</label>\n    <input type=\"text\" [(ngModel)]=\"user.lastName\" name=\"lastName\">\n  </div>\n  <div>\n    <label>Email:</label>\n    <input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\">\n  </div>\n  <div>\n    <label>Username:</label>\n    <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\">\n  </div>\n  <div>\n    <label>Password:</label>\n    <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\">\n  </div>\n  <div>\n    <input type=\"submit\" value=\"Sign up\" />\n  </div>\n  <span>{{errorMessage}}</span>\n</form>";

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let message of messages\" [ngSwitch]=\"message.type\">\n    <strong *ngSwitchCase=\"'status'\">\n      <span>{{message.created}}</span>\n      <span>{{message.username}}</span>\n      <span>is</span>\n      <span>{{message.text}}</span>\n    </strong>\n    <span *ngSwitchDefault>\n      <span>{{message.created}}</span>\n      <span>{{message.username}}:</span>\n      <span>{{message.text}}</span>\n    </span>\n</div>\n<form (ngSubmit)=\"sendMessage()\">\n    <input type=\"text\" name= \"messageText\" [(ngModel)]=\"messageText\">\n    <input type=\"submit\">\n</form>";

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = "<h3>Home page</h3>\n<div *ngIf=\"user\">\n    <h1>Hello {{user.firstName}}</h1>\n  <a href=\"/api/auth/signout\">Signout</a>\n  <ul>\n   <li><a [routerLink]=\"['/articles']\">List Articles</a></li>\n    <li><a [routerLink]=\"['/articles/create']\">Create Article</a></li>\n    <li><a [routerLink]=\"['/chat']\">Chat</a></li> \n  </ul>\n</div>\n\n <div *ngIf=\"!user\">\n  <a [routerLink]=\"['/authentication/signup']\">Signup</a>\n  <a [routerLink]=\"['/authentication/signin']\">Signin</a>\n</div>  \n<router-outlet></router-outlet>\n\n";

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = ".strong{\n    font-size: 1.5em;\n    font-weight: 100;\n}\n.highlight{\n    background-color:grey;\n}"

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "h3{\n    color:red;\n}"

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(185);
__webpack_require__(184);
var Observable_1 = __webpack_require__(0);
var core_1 = __webpack_require__(3);
var http_1 = __webpack_require__(74);
var ArticlesService = (function () {
    // private _otherUrl='api/articles/:articleId';
    function ArticlesService(_http) {
        this._http = _http;
        this._baseUrl = 'api/articles';
    } //
    ArticlesService.prototype.create = function (article) {
        return this._http
            .post(this._baseUrl, article)
            .map(function (res) { return res.json(); })
            .catch(this.handlerError);
    };
    ArticlesService.prototype.read = function (id) {
        return this._http
            .get(this._baseUrl + "/" + id)
            .map(function (res) { res.json(); })
            .catch(this.handlerError);
    };
    ArticlesService.prototype.list = function () {
        return this._http.get(this._baseUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handlerError);
    };
    ArticlesService.prototype.update = function (article) {
        return this._http.put(this._baseUrl + "/" + article._id, article)
            .map(function (res) { return res.json(); })
            .catch(this.handlerError);
    };
    ArticlesService.prototype.delete = function (id) {
        return this._http.delete(this._baseUrl + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handlerError);
    };
    ArticlesService.prototype.handlerError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().message || 'Server error !');
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ArticlesService);
exports.ArticlesService = ArticlesService;


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var http_1 = __webpack_require__(74);
var Observable_1 = __webpack_require__(0);
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.user = window['user'];
        this._signinURL = 'api/auth/signin';
        this._signupURL = 'api/auth/signup';
    }
    AuthenticationService.prototype.isLoggedIn = function () {
        return (!!this.user);
    };
    AuthenticationService.prototype.signin = function (credentials) {
        var _this = this;
        var body = JSON.stringify(credentials);
        var headers = new http_1.Headers({ 'Content-Type': 'text/plain' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._signinURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._signupURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(93);
var app_module_1 = __webpack_require__(231);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var LoggerService = (function () {
    function LoggerService() {
        this.logs = [];
        this.logs.push('logger at ' + Date.now());
    }
    LoggerService.prototype.showLastLog = function () {
        console.log(this.logs.length === 0 ? 'No logger happend' : this.logs[this.logs.length - 1]);
    };
    LoggerService.prototype.showAllLogs = function () {
        this.logs.forEach(function (item) { return console.log(item); });
    };
    return LoggerService;
}());
LoggerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], LoggerService);
exports.LoggerService = LoggerService;


/***/ })

},[688]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FydGljbGVzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXJ0aWNsZXMvZWRpdC9lZGl0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FydGljbGVzL2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcnRpY2xlcy92aWV3L3ZpZXcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jaGF0L2NoYXQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9yb3V0ZS1zdHVkeS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FydGljbGVzL2FydGljbGVzLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXJ0aWNsZXMvYXJ0aWNsZXMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jaGF0L2NoYXQtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9jaGF0L2NoYXQubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY29yZW1vZHVsZS9jb3JlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9yb3V0ZS1zdHVkeS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3JvdXRlLXN0dWR5Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2FydGljbGVzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcnRpY2xlcy9lZGl0L2VkaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcnRpY2xlcy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hcnRpY2xlcy92aWV3L3ZpZXcuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3NlcnZpY2VzL2FydGljbGVzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9tYWluLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBMEM7QUFDMUMsaURBQStEO0FBTS9ELElBQWEsaUJBQWlCO0lBQzFCLDJCQUFvQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQztBQUpZLGlCQUFpQjtJQUo3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFDLGlDQUFpQztLQUMzQyxDQUFDO3FDQUUyQixrQ0FBZTtHQUQvQixpQkFBaUIsQ0FJN0I7QUFKWSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7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LENBQUMsY0FBSSxJQUFFLGNBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDO0FBWFksYUFBYTtJQUR6QixpQkFBVSxFQUFFOztHQUNBLGFBQWEsQ0FXekI7QUFYWSxzQ0FBYSIsImZpbGUiOiJtYWluLmNlYjgzYjY2ZDRmOWQ2ZjE3Y2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnRpY2xlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcnRpY2xlcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXJ0aWNsZXMnLFxuICB0ZW1wbGF0ZTpgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PmBcbn0pXG5leHBvcnQgY2xhc3MgQXJ0aWNsZXNDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FzOiBBcnRpY2xlc1NlcnZpY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NwMiBpbnNpZGUgQXJ0aWNsZXNDb21wb25lbnQnKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCxJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXJ0aWNsZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXJ0aWNsZXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NyZWF0ZScsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2NyZWF0ZS5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvbXBvbmVudCB7XG4gIGFydGljbGU6IGFueSA9IHt9O1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZz0nJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyLHByaXZhdGUgX2luamVjdG9yOkluamVjdG9yLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hcnRpY2xlc1NlcnZpY2U6IEFydGljbGVzU2VydmljZVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY3AyIGluc2lkZSBDcmVhdGVDb21wb25lbnQnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhfaW5qZWN0b3IpO1xuICAgICAgICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuX2FydGljbGVzU2VydmljZVxuICAgICAgICAuY3JlYXRlKHRoaXMuYXJ0aWNsZSlcbiAgICAgICAgLnN1YnNjcmliZShjcmVhdGVkQXJ0aWNsZSA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYXJ0aWNsZXMnLCBjcmVhdGVkQXJ0aWNsZS5faWRdKSxcbiAgICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvYXJ0aWNsZXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBcnRpY2xlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcnRpY2xlcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWRpdCcsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2VkaXQuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0Q29tcG9uZW50IHtcbiAgYXJ0aWNsZTogYW55ID0ge307XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBwYXJhbXNPYnNlcnZlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIFxuICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIFxuICAgICAgICBwcml2YXRlIF9hcnRpY2xlc1NlcnZpY2U6IEFydGljbGVzU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhcmFtc09ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgbGV0IGFydGljbGVJZCA9IHBhcmFtc1snYXJ0aWNsZUlkJ107XG5cbiAgICAgIHRoaXMuX2FydGljbGVzU2VydmljZS5yZWFkKGFydGljbGVJZCkuc3Vic2NyaWJlKGFydGljbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUgPSBhcnRpY2xlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYXJ0aWNsZXMnXSkpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5wYXJhbXNPYnNlcnZlci51bnN1YnNjcmliZSgpO1xuICB9XG4gIFxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5fYXJ0aWNsZXNTZXJ2aWNlXG4gICAgICAgIC51cGRhdGUodGhpcy5hcnRpY2xlKVxuICAgICAgICAuc3Vic2NyaWJlKHNhdmVkQXJ0aWNsZSA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYXJ0aWNsZXMnLHNhdmVkQXJ0aWNsZS5faWRdKSxcbiAgICAgICAgICAgICAgICAgICBlcnJvciA9PiAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcik7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL2FydGljbGVzL2VkaXQvZWRpdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFydGljbGVzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FydGljbGVzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0JyxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbGlzdC5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnR7XG4gIGFydGljbGVzOiBhbnk7XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FydGljbGVzU2VydmljZTogQXJ0aWNsZXNTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2FydGljbGVzU2VydmljZS5saXN0KCkuc3Vic2NyaWJlKGFydGljbGVzICA9PiB0aGlzLmFydGljbGVzID0gYXJ0aWNsZXMpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9hcnRpY2xlcy9saXN0L2xpc3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXJ0aWNsZXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXJ0aWNsZXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZpZXcnLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi92aWV3LmNvbXBvbmVudC5odG1sJyksXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdDb21wb25lbnQge1xuICB1c2VyOiBhbnk7XG4gIGFydGljbGU6IGFueTtcbiAgcGFyYW1zT2JzZXJ2ZXI6IGFueTtcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gIGFsbG93RWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIFxuICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIFxuICAgICAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgXG4gICAgICAgIHByaXZhdGUgX2FydGljbGVzU2VydmljZTogQXJ0aWNsZXNTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXNlciA9IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS51c2VyXG5cbiAgICB0aGlzLnBhcmFtc09ic2VydmVyID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgbGV0IGFydGljbGVJZCA9IHBhcmFtc1snYXJ0aWNsZUlkJ107XG5cbiAgICAgIHRoaXMuX2FydGljbGVzU2VydmljZVxuICAgICAgICAucmVhZChhcnRpY2xlSWQpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgYXJ0aWNsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFydGljbGUgPSBhcnRpY2xlO1xuICAgICAgICAgICAgdGhpcy5hbGxvd0VkaXQgPSAodGhpcy51c2VyICYmIHRoaXMudXNlci5faWQgPT09IHRoaXMuYXJ0aWNsZS5jcmVhdG9yLl9pZCk7XG4gICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FydGljbGVzJ10pXG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnBhcmFtc09ic2VydmVyLnVuc3Vic2NyaWJlKCk7XG4gIH1cbiAgZGVsZXRlKCkge1xuICAgIHRoaXMuX2FydGljbGVzU2VydmljZS5kZWxldGUodGhpcy5hcnRpY2xlLl9pZClcbiAgICAgICAgLnN1YnNjcmliZShkZWxldGVkQXJ0aWNsZSA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYXJ0aWNsZXMnXSksXG4gICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcik7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL2FydGljbGVzL3ZpZXcvdmlldy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi9sb2dnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dGhlbnRpY2F0aW9uJyxcbiAgdGVtcGxhdGU6cmVxdWlyZSgnLi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2dlcjpMb2dnZXJTZXJ2aWNlKXtcbiAgICAgX2xvZ2dlci5zaG93QWxsTG9ncygpO1xuICAgfVxuIH1cblxuIC8vIHRlbXBsYXRlVXJsOiAnYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5odG1sJ1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWduaW4nLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zaWduaW4uY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQge1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgY3JlZGVudGlhbHM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9sb2dnZXI6TG9nZ2VyU2VydmljZVxuICApIHtcbiAgICBfbG9nZ2VyLnNob3dBbGxMb2dzKCk7XG4gIH1cblxuICBzaWduaW4oKSB7XG4gICAgdGhpcy5fbG9nZ2VyLnNob3dMYXN0TG9nKCk7XG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLnNpZ25pbih0aGlzLmNyZWRlbnRpYWxzKVxuICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCAgPT4gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKSxcbiAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yICk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9sb2dnZXIuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWdudXAnLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zaWdudXAuY29tcG9uZW50Lmh0bWwnKSxcbiAgcHJvdmlkZXJzOltMb2dnZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgdXNlcjogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IgKFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX2xvZ2VyOkxvZ2dlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHNpZ251cCgpIHtcbiAgICB0aGlzLl9sb2dlci5zaG93TGFzdExvZygpO1xuICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5zaWdudXAodGhpcy51c2VyKVxuICAgIC5zdWJzY3JpYmUocmVzdWx0ICA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pLFxuICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGF0JyxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY2hhdC5jb21wb25lbnQuaHRtbCcpLFxuICBwcm92aWRlcnM6IFtDaGF0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCB7XG4gIG1lc3NhZ2VUZXh0OiBzdHJpbmc7XG4gIG1lc3NhZ2VzOiBBcnJheTxhbnk+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGF0U2VydmljZTogQ2hhdFNlcnZpY2UpIHt9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgQXJyYXkoKTtcbiAgICB0aGlzLl9jaGF0U2VydmljZS5vbignY2hhdE1lc3NhZ2UnLCAobXNnOmFueSkgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1zZyk7XG4gICAgfSk7XG4gIH1cbiAgc2VuZE1lc3NhZ2UoKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHt0ZXh0OiB0aGlzLm1lc3NhZ2VUZXh0fTtcbiAgICB0aGlzLl9jaGF0U2VydmljZS5lbWl0KCdjaGF0TWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgIHRoaXMubWVzc2FnZVRleHQgPSAnJ1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2NoYXRTZXJ2aWNlLnJlbW92ZUxpc3RlbmVyKCdjaGF0TWVzc2FnZScpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnRzIiwiLy8gaW1wb3J0ICdyeGpzL1J4Jztcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5cbmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhdFNlcnZpY2Uge1xuICBwcml2YXRlIHNvY2tldDogYW55O1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UpIHtcbiAgICBpZiAodGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgdGhpcy5zb2NrZXQgPSBpbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydob21lJ10pO1xuICAgIH1cbiAgfVxuXG4gIG9uKGV2ZW50TmFtZTpzdHJpbmcsIGNhbGxiYWNrOmFueSkge1xuICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgdGhpcy5zb2NrZXQub24oZXZlbnROYW1lLCBmdW5jdGlvbihkYXRhOmFueSkge1xuICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBlbWl0KGV2ZW50TmFtZTpzdHJpbmcsIGRhdGE6YW55KSB7XG4gICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZTpzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgIHRoaXMuc29ja2V0LnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSk7XG4gICAgfVxuICB9O1xufSBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL2NoYXQvY2hhdC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKSxcbiAgc3R5bGVzOltyZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50LmNzcycpXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgdXNlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IF9hdXRoZW50aWNhdGlvblNlcnZpY2UudXNlcjtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9ICBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncm91dGUtc3R1ZHknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYXY+XG4gICAgICA8YSByb3V0ZXJMaW5rPVwicnNob21lXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPnJzaG9tZTwvYT5cbiAgICAgIDxhIHJvdXRlckxpbms9XCJwcm9kdWN0XCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPnByb2R1Y3Q8L2E+XG4gICAgICA8YSByb3V0ZXJMaW5rPVwicHJvZHVjdC9saXN0XCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPnByb2R1Y3QvbGlzdDwvYT5cbiAgICAgIDxhIHJvdXRlckxpbms9XCJwcm9kdWN0L2RldGFpbFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5wcm9kdWN0L2RldGFpbDwvYT5cbiAgICAgIDxhIHJvdXRlckxpbms9XCJwcm9kdWN0L2RldGFpbC9pdGVtXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPnByb2R1Y3QvZGV0YWlsL2l0ZW08L2E+XG4gICAgICA8YSByb3V0ZXJMaW5rPVwicHJvZHVjdC9pdGVtMlwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5wcm9kdWN0L2RldGFpbC9pdGVtMjwvYT5cbiAgICA8L25hdj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZVN0dWR5Q29tcG9uZW50IHsgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvcm91dGUtc3R1ZHkvcm91dGUtc3R1ZHkuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVzLFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL2NvcmVtb2R1bGUvY29yZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgQXJ0aWNsZXNNb2R1bGUgfSBmcm9tICcuL2FydGljbGVzL2FydGljbGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBSb3V0ZVN0dWR5TW9kdWxlIH0gZnJvbSAnLi9yb3V0ZS1zdHVkeS9yb3V0ZS1zdHVkeS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhdE1vZHVsZSB9IGZyb20gJy4vY2hhdC9jaGF0Lm1vZHVsZSc7XG5cbi8vIGltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7ICBcbi8vIGltcG9ydCB7IEFydGljbGVzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXJ0aWNsZXMuc2VydmljZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogICAgICBbIFxuICAgICAgICAgICAgICAgICAgQnJvd3Nlck1vZHVsZSAsSHR0cE1vZHVsZSxGb3Jtc01vZHVsZSxcbiAgICAgICAgICAgICAgICAgIENvcmVNb2R1bGUsXG5cbiAgICAgICAgICAgICAgICAgIENoYXRNb2R1bGUsXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIEFydGljbGVzTW9kdWxlLFxuICAgICAgICAgICAgICAgICAgQXV0aGVudGljYXRpb25Nb2R1bGUsICAgIFxuICAgICAgICAgICAgICAgICAgSG9tZU1vZHVsZSwgICAgXG4gICAgICAgICAgICAgICAgICBSb3V0ZVN0dWR5TW9kdWxlLCAgIFxuICAgICAgICAgICAgICAgICAgQXBwUm91dGluZ01vZHVsZSwgICAgICAgIFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQ29tcG9uZW50IF0sXG4gIGJvb3RzdHJhcDogICAgWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyxSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBSb3V0ZVN0dWR5Q29tcG9uZW50IH0gZnJvbSAnLi9yb3V0ZS1zdHVkeS9yb3V0ZS1zdHVkeS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQXBwUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOicnLFxuICAgIHJlZGlyZWN0VG86J2hvbWUnLFxuICAgIHBhdGhNYXRjaDonZnVsbCdcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czpbUm91dGVyTW9kdWxlLmZvclJvb3QoQXBwUm91dGVzKV0sXG4gIGV4cG9ydHM6W1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxuXG4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHRlbXBsYXRlOmBcbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCJyb3V0ZS1zdHVkeVwiIGNsYXNzPVwic3Ryb25nXCI+Um91dGUgc3R1ZHk8L2E+XG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiaG9tZVwiIGNsYXNzPVwic3Ryb25nXCI+SG9tZTwvYT5cbiAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCJhdXRoZW50aWNhdGlvblwiIGNsYXNzPVwic3Ryb25nXCI+QXV0aGVudGljYXRpb248L2E+XG4gICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiY2hhdFwiIGNsYXNzPVwic3Ryb25nXCI+Q2hhdDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6W3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG4gIG5hbWUgPSAnQW5ndWxhcic7IFxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciApIHsgIC8vXG4gICAgY29uc29sZS5sb2coXCJjcDFcIik7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFydGljbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9hcnRpY2xlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdENvbXBvbmVudCB9IGZyb20gJy4vZWRpdC9lZGl0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlc1JvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgICBwYXRoOiAnYXJ0aWNsZXMnLFxuICAgICAgY29tcG9uZW50OiBBcnRpY2xlc0NvbXBvbmVudCxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtwYXRoOiAnJywgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50fSxcbiAgICAgICAge3BhdGg6ICdjcmVhdGUnLCBjb21wb25lbnQ6IENyZWF0ZUNvbXBvbmVudH0sXG4gICAgICAgIHtwYXRoOiAnOmFydGljbGVJZCcsIGNvbXBvbmVudDogVmlld0NvbXBvbmVudH0sXG4gICAgICAgIHtwYXRoOiAnOmFydGljbGVJZC9lZGl0JywgY29tcG9uZW50OiBFZGl0Q29tcG9uZW50fVxuICAgICAgXVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKEFydGljbGVzUm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFydGljbGVzUm91dGluZ01vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvYXJ0aWNsZXMvYXJ0aWNsZXMtcm91dGluZy5tb2R1bGUudHMiLCIvLyBpbXBvcnQgeyBBcnRpY2xlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcnRpY2xlcy5zZXJ2aWNlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFydGljbGVzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXJ0aWNsZXMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXJ0aWNsZXNDb21wb25lbnQgfSBmcm9tICcuL2FydGljbGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDcmVhdGVDb21wb25lbnQgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy92aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9lZGl0L2VkaXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBBcnRpY2xlc1JvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXJ0aWNsZXNDb21wb25lbnQsXG4gICAgQ3JlYXRlQ29tcG9uZW50LFxuICAgIExpc3RDb21wb25lbnQsXG4gICAgVmlld0NvbXBvbmVudCxcbiAgICBFZGl0Q29tcG9uZW50LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFydGljbGVzTW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9hcnRpY2xlcy9hcnRpY2xlcy5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsXG4gICAgICAgICBSb3V0ZXJNb2R1bGUgfSAgICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tICcuL3NpZ25pbi9zaWduaW4uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uUm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnYXV0aGVudGljYXRpb24nLFxuICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50LFxuICBjaGlsZHJlbjogW1xuICAgIHsgcGF0aDogJ3NpZ25pbicsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQgfVxuICBdXG59XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChBdXRoZW50aWNhdGlvblJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGV9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSAnLi9zaWduaW4vc2lnbmluLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tICcuL3NpZ25pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuL2xvZ2dlci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50LFxuICAgIFNpZ25pbkNvbXBvbmVudCxcbiAgICBTaWdudXBDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczpbTG9nZ2VyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Nb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBjaGF0Um91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnY2hhdCcsXG4gIGNvbXBvbmVudDogQ2hhdENvbXBvbmVudFxufV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgUm91dGVyTW9kdWxlLmZvckNoaWxkKGNoYXRSb3V0ZXMpIF0sXG4gIGV4cG9ydHM6IFsgUm91dGVyTW9kdWxlIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdFJvdXRpbmdNb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL2NoYXQvY2hhdC1yb3V0aW5nLm1vZHVsZS50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENoYXRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jaGF0LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSAnLi9jaGF0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDaGF0Um91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDaGF0Q29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDaGF0U2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoYXRNb2R1bGUge31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL2NoYXQvY2hhdC5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBBcnRpY2xlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcnRpY2xlcy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOltdLFxuICAgIGRlY2xhcmF0aW9uczpbXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICAgICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICBBcnRpY2xlc1NlcnZpY2VcbiAgICAgICAgICAgICAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZXt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9jb3JlbW9kdWxlL2NvcmUubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLFxuICAgICAgICAgUm91dGVyTW9kdWxlIH0gICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBIb21lUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnaG9tZScsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoSG9tZVJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUm91dGluZ01vZHVsZXt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgICAgSG9tZUNvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVTdHVkeUNvbXBvbmVudCB9IGZyb20gJy4vcm91dGUtc3R1ZHkuY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6J3JvdXRlLXN0dWR5JyxcbiAgICAvLyBvdXRsZXQ6ICdwcm9kdWN0JyxcbiAgICBjb21wb25lbnQ6Um91dGVTdHVkeUNvbXBvbmVudCxcbiAgICBjaGlsZHJlbjpbXG4gICAgICAgIHsgcGF0aDogJ3JzaG9tZScsIFxuICAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL3JzaG9tZS9yc2hvbWUubW9kdWxlJylbJ1JTSG9tZU1vZHVsZSddKTsgIH0pO30pIH0sXG4gICAgICAgIHsgcGF0aDogJ3Byb2R1Y3QnLCBcbiAgICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZScpWydQcm9kdWN0TW9kdWxlJ10pOyAgfSk7fSkgfSxcbiAgICBdXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcykgXSxcbiAgZXhwb3J0czogWyBSb3V0ZXJNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZVN0dWR5Um91dGluZ01vZHVsZSB7fVxuXG4vLyAsXG4vLyAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9yb3V0ZS1zdHVkeS1yb3V0aW5nLm1vZHVsZS50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgUm91dGVTdHVkeVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3JvdXRlLXN0dWR5LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFJvdXRlU3R1ZHlDb21wb25lbnQgfSAgICAgICAgIGZyb20gJy4vcm91dGUtc3R1ZHkuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFJTSG9tZU1vZHVsZSB9IGZyb20gJy4vcnNob21lL3JzaG9tZS5tb2R1bGUnO1xuLy8gaW1wb3J0IHsgUHJvZHVjdE1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZSc7XG4vLyBpbXBvcnQgeyBEZXRhaWxNb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvZGV0YWlsL2RldGFpbC5tb2R1bGUnO1xuLy8gaW1wb3J0IHsgTGlzdE1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC9saXN0L2xpc3QubW9kdWxlJztcbi8vIGltcG9ydCB7IEl0ZW1Nb2R1bGUgfSBmcm9tICcuL3Byb2R1Y3QvZGV0YWlsL2l0ZW0vaXRlbS5tb2R1bGUnO1xuLy8gaW1wb3J0IHsgSXRlbTJNb2R1bGUgfSBmcm9tICAnLi9wcm9kdWN0L2RldGFpbC9pdGVtMi9pdGVtMi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICAvLyBSU0hvbWVNb2R1bGUsXG4gICAgLy8gUHJvZHVjdE1vZHVsZSxcbiAgICAvLyBEZXRhaWxNb2R1bGUsXG4gICAgLy8gTGlzdE1vZHVsZSxcbiAgICAvLyBJdGVtTW9kdWxlLFxuICAgIC8vIEl0ZW0yTW9kdWxlXG4gICAgUm91dGVTdHVkeVJvdXRpbmdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJvdXRlU3R1ZHlDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogWyBdXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRlU3R1ZHlNb2R1bGUgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9yb3V0ZS1zdHVkeS5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPk5ldyBBcnRpY2xlPC9oMT5cXG48Zm9ybSAobmdTdWJtaXQpPVxcXCJjcmVhdGUoKVxcXCIgbm92YWxpZGF0ZT5cXG4gIDxkaXY+XFxuICAgIDxsYWJlbCBmb3I9XFxcInRpdGxlXFxcIj5UaXRsZTwvbGFiZWw+XFxuICAgIDxkaXY+XFxuICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJhcnRpY2xlLnRpdGxlXFxcIiBuYW1lPVxcXCJ0aXRsZVxcXCIgcGxhY2Vob2xkZXI9XFxcIlRpdGxlXFxcIj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDxkaXY+XFxuICAgIDxsYWJlbCBmb3I9XFxcImNvbnRlbnRcXFwiPkNvbnRlbnQ8L2xhYmVsPlxcbiAgICA8ZGl2PlxcbiAgICAgIDx0ZXh0YXJlYSB0eXBlPVxcXCJ0ZXh0XFxcIiByZXF1aXJlZCBjb2xzPVxcXCIzMFxcXCIgcm93cz1cXFwiMTBcXFwiIFxcbiAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwiYXJ0aWNsZS5jb250ZW50XFxcIiBuYW1lPVxcXCJjb250ZW50XFxcIiBcXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNvbnRlbnRcXFwiPjwvdGV4dGFyZWE+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2PlxcbiAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIj5cXG4gIDwvZGl2PlxcbiBcXG4gIDxzdHJvbmcgKm5nSWY9XFxcImVycm9yTWVzc2FnZSE9JydcXFwiIGlkPVxcXCJlcnJvclxcXCI+e3tlcnJvck1lc3NhZ2V9fTwvc3Ryb25nPlxcbjwvZm9ybT5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXJ0aWNsZXMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+RWRpdCBBcnRpY2xlPC9oMT5cXG48Zm9ybSAobmdTdWJtaXQpPVxcXCJ1cGRhdGUoKVxcXCIgbm92YWxpZGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcInRpdGxlXFxcIj5UaXRsZTwvbGFiZWw+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiByZXF1aXJlZCBcXG4gICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XFxcImFydGljbGUudGl0bGVcXFwiIFxcbiAgICAgICAgICAgICAgICAgICBuYW1lPVxcXCJ0aXRsZVxcXCIgXFxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJUaXRsZVxcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXY+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJjb250ZW50XFxcIj5Db250ZW50PC9sYWJlbD5cXG4gICAgPGRpdj5cXG4gICAgICAgIDx0ZXh0YXJlYSB0eXBlPVxcXCJ0ZXh0XFxcIiByZXF1aXJlZCBjb2xzPVxcXCIzMFxcXCIgcm93cz1cXFwiMTBcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cXFwiYXJ0aWNsZS5jb250ZW50XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cXFwiY29udGVudFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDb250ZW50XFxcIj48L3RleHRhcmVhPlxcbiAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXY+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiB2YWx1ZT1cXFwiVXBkYXRlXFxcIj5cXG4gICAgPC9kaXY+XFxuICAgIFxcbiAgICA8c3Ryb25nPnt7ZXJyb3JNZXNzYWdlfX08L3N0cm9uZz5cXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FydGljbGVzL2VkaXQvZWRpdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDE+QXJ0aWNsZXM8L2gxPlxcbjx1bD5cXG4gIDxsaSAqbmdGb3I9XFxcImxldCBhcnRpY2xlIG9mIGFydGljbGVzXFxcIj5cXG4gICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hcnRpY2xlcycsIGFydGljbGUuX2lkXVxcXCI+e3thcnRpY2xlLnRpdGxlfX08L2E+XFxuICAgIDxicj5cXG4gICAgPHNtYWxsPnt7YXJ0aWNsZS5jcmVhdGVkfX0ve3thcnRpY2xlLmNyZWF0b3IuZnVsbE5hbWV9fTwvc21hbGw+XFxuICAgIDxwPnt7YXJ0aWNsZS5jb250ZW50fX08L3A+XFxuICA8L2xpPlxcbjwvdWw+XFxuXFxuPGRpdiAqbmdJZj1cXFwiYXJ0aWNsZXMgJiYgYXJ0aWNsZXMubGVuZ3RoID09PSAwXFxcIj5cXG4gIE5vIGFydGljbGVzIHlldCwgd2h5IGRvbid0IHlvdSA8YSBbcm91dGVyTGlua109XFxcIlsnL2FydGljbGVzL2NyZWF0ZSddXFxcIj5jcmVhdGUgb25lPC9hPj8gXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2FydGljbGVzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2VjdGlvbiAqbmdJZj1cXFwiYXJ0aWNsZSAmJiBhcnRpY2xlLmNyZWF0b3JcXFwiPlxcbiAgPGgxPnt7YXJ0aWNsZS50aXRsZX19PC9oMT5cXG5cXG4gIDxkaXYgKm5nSWY9XFxcImFsbG93RWRpdFxcXCI+XFxuICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hcnRpY2xlcycsIGFydGljbGUuX2lkLCAnZWRpdCddXFxcIj5lZGl0PC9hPlxcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cXFwiZGVsZXRlKClcXFwiPmRlbGV0ZTwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuICA8c21hbGw+XFxuICAgICAgPGVtPlBvc3RlZCBvbiB7e2FydGljbGUuY3JlYXRlZH19IGJ5IHt7YXJ0aWNsZS5jcmVhdG9yLmZ1bGxOYW1lfX08L2VtPlxcbiAgPC9zbWFsbD5cXG5cXG4gIDxwPnt7YXJ0aWNsZS5jb250ZW50fX08L3A+XFxuPC9zZWN0aW9uPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hcnRpY2xlcy92aWV3L3ZpZXcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXG4gIDxhIGhyZWY9XFxcIi9hcGkvb2F1dGgvZ29vZ2xlXFxcIj5TaWduIGluIHdpdGggR29vZ2xlPC9hPlxcbiAgPGEgaHJlZj1cXFwiL2FwaS9vYXV0aC9mYWNlYm9va1xcXCI+U2lnbiBpbiB3aXRoIEZhY2Vib29rPC9hPlxcbiAgPGEgaHJlZj1cXFwiL2FwaS9vYXV0aC90d2l0dGVyXFxcIj5TaWduIGluIHdpdGggVHdpdHRlcjwvYT5cXG4gIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gKG5nU3VibWl0KT1cXFwic2lnbmluKClcXFwiPlxcbiAgPGRpdj5cXG4gICAgPGxhYmVsPlVzZXJuYW1lOjwvbGFiZWw+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiY3JlZGVudGlhbHMudXNlcm5hbWVcXFwiIG5hbWU9XFxcInVzZXJuYW1lXFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdj5cXG4gICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcImNyZWRlbnRpYWxzLnBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXY+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiIHZhbHVlPVxcXCJTaWduIEluXFxcIj5cXG4gIDwvZGl2PlxcbiAgPHNwYW4+e3tlcnJvck1lc3NhZ2V9fTwvc3Bhbj5cXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ25pbi9zaWduaW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gKG5nU3VibWl0KT1cXFwic2lnbnVwKClcXFwiPlxcbiAgPGRpdj5cXG4gIDxsYWJlbD5GaXJzdCBOYW1lOjwvbGFiZWw+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5maXJzdE5hbWVcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXY+XFxuICAgIDxsYWJlbD5MYXN0IE5hbWU6PC9sYWJlbD5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmxhc3ROYW1lXFxcIiBuYW1lPVxcXCJsYXN0TmFtZVxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXY+XFxuICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxcbiAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdj5cXG4gICAgPGxhYmVsPlVzZXJuYW1lOjwvbGFiZWw+XFxuICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci51c2VybmFtZVxcXCIgbmFtZT1cXFwidXNlcm5hbWVcXFwiPlxcbiAgPC9kaXY+XFxuICA8ZGl2PlxcbiAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cXG4gICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5wYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiPlxcbiAgPC9kaXY+XFxuICA8ZGl2PlxcbiAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiB2YWx1ZT1cXFwiU2lnbiB1cFxcXCIgLz5cXG4gIDwvZGl2PlxcbiAgPHNwYW4+e3tlcnJvck1lc3NhZ2V9fTwvc3Bhbj5cXG48L2Zvcm0+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC9zaWdudXAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdGb3I9XFxcImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXFxcIiBbbmdTd2l0Y2hdPVxcXCJtZXNzYWdlLnR5cGVcXFwiPlxcbiAgICA8c3Ryb25nICpuZ1N3aXRjaENhc2U9XFxcIidzdGF0dXMnXFxcIj5cXG4gICAgICA8c3Bhbj57e21lc3NhZ2UuY3JlYXRlZH19PC9zcGFuPlxcbiAgICAgIDxzcGFuPnt7bWVzc2FnZS51c2VybmFtZX19PC9zcGFuPlxcbiAgICAgIDxzcGFuPmlzPC9zcGFuPlxcbiAgICAgIDxzcGFuPnt7bWVzc2FnZS50ZXh0fX08L3NwYW4+XFxuICAgIDwvc3Ryb25nPlxcbiAgICA8c3BhbiAqbmdTd2l0Y2hEZWZhdWx0PlxcbiAgICAgIDxzcGFuPnt7bWVzc2FnZS5jcmVhdGVkfX08L3NwYW4+XFxuICAgICAgPHNwYW4+e3ttZXNzYWdlLnVzZXJuYW1lfX06PC9zcGFuPlxcbiAgICAgIDxzcGFuPnt7bWVzc2FnZS50ZXh0fX08L3NwYW4+XFxuICAgIDwvc3Bhbj5cXG48L2Rpdj5cXG48Zm9ybSAobmdTdWJtaXQpPVxcXCJzZW5kTWVzc2FnZSgpXFxcIj5cXG4gICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9IFxcXCJtZXNzYWdlVGV4dFxcXCIgWyhuZ01vZGVsKV09XFxcIm1lc3NhZ2VUZXh0XFxcIj5cXG4gICAgPGlucHV0IHR5cGU9XFxcInN1Ym1pdFxcXCI+XFxuPC9mb3JtPlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgzPkhvbWUgcGFnZTwvaDM+XFxuPGRpdiAqbmdJZj1cXFwidXNlclxcXCI+XFxuICAgIDxoMT5IZWxsbyB7e3VzZXIuZmlyc3ROYW1lfX08L2gxPlxcbiAgPGEgaHJlZj1cXFwiL2FwaS9hdXRoL3NpZ25vdXRcXFwiPlNpZ25vdXQ8L2E+XFxuICA8dWw+XFxuICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvYXJ0aWNsZXMnXVxcXCI+TGlzdCBBcnRpY2xlczwvYT48L2xpPlxcbiAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hcnRpY2xlcy9jcmVhdGUnXVxcXCI+Q3JlYXRlIEFydGljbGU8L2E+PC9saT5cXG4gICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvY2hhdCddXFxcIj5DaGF0PC9hPjwvbGk+IFxcbiAgPC91bD5cXG48L2Rpdj5cXG5cXG4gPGRpdiAqbmdJZj1cXFwiIXVzZXJcXFwiPlxcbiAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hdXRoZW50aWNhdGlvbi9zaWdudXAnXVxcXCI+U2lnbnVwPC9hPlxcbiAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9hdXRoZW50aWNhdGlvbi9zaWduaW4nXVxcXCI+U2lnbmluPC9hPlxcbjwvZGl2PiAgXFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcblxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnN0cm9uZ3tcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuLmhpZ2hsaWdodHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmV5O1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0gXCJoM3tcXG4gICAgY29sb3I6cmVkO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNDAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuIFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFydGljbGVzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfYmFzZVVybD0nYXBpL2FydGljbGVzJztcbiAgICAvLyBwcml2YXRlIF9vdGhlclVybD0nYXBpL2FydGljbGVzLzphcnRpY2xlSWQnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKSB7fSAgLy9cbiAgICBjcmVhdGUoYXJ0aWNsZTphbnkpOk9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwXG4gICAgICAgICAgICAgICAgICAgLnBvc3QodGhpcy5fYmFzZVVybCxhcnRpY2xlKVxuICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVyRXJyb3IpO1xuICAgIH1cbiAgICByZWFkKGlkOlN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBcbiAgICAgICAgICAgICAgICAgICAuZ2V0KGAke3RoaXMuX2Jhc2VVcmx9LyR7aWR9YClcbiAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHtyZXMuanNvbigpO30pXG4gICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlckVycm9yKTtcbiAgICB9XG4gICAgbGlzdCgpOk9ic2VydmFibGU8QXJyYXk8YW55Pj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fYmFzZVVybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlckVycm9yKTtcbiAgICB9XG4gICAgdXBkYXRlKGFydGljbGU6YW55KTpPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoYCR7dGhpcy5fYmFzZVVybH0vJHthcnRpY2xlLl9pZH1gLGFydGljbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZXJFcnJvcik7XG4gICAgfVxuICAgIGRlbGV0ZShpZDpTdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZShgJHt0aGlzLl9iYXNlVXJsfS8ke2lkfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZXJFcnJvcik7XG4gICAgfVxuICAgIGhhbmRsZXJFcnJvcihlcnJvcjpSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvciAhJyk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvc2VydmljZXMvYXJ0aWNsZXMuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgcHVibGljIHVzZXIgPSB3aW5kb3dbJ3VzZXInXTtcblxuICBwcml2YXRlIF9zaWduaW5VUkwgPSAnYXBpL2F1dGgvc2lnbmluJztcbiAgcHJpdmF0ZSBfc2lnbnVwVVJMID0gJ2FwaS9hdXRoL3NpZ251cCc7XG4gIFxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cbiAgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCEhdGhpcy51c2VyKTtcbiAgfVxuXG4gIHNpZ25pbihjcmVkZW50aWFsczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJyB9KTtcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fc2lnbmluVVJMLCBib2R5LCBvcHRpb25zKVxuICAgIC5tYXAocmVzID0+IHRoaXMudXNlciA9IHJlcy5qc29uKCkpXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgc2lnbnVwKHVzZXI6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fc2lnbnVwVVJMLCBib2R5LCBvcHRpb25zKVxuICAgIC5tYXAocmVzID0+IHRoaXMudXNlciA9IHJlcy5qc29uKCkpXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkubWVzc2FnZSB8fCAnU2VydmVyIGVycm9yJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9tYWluLnRzIiwiXG5pbXBvcnQgeyBJbmplY3RhYmxlLE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnZXJTZXJ2aWNlIHtcbiAgICBsb2dzOlN0cmluZ1tdPVtdO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubG9ncy5wdXNoKCdsb2dnZXIgYXQgJytEYXRlLm5vdygpKTtcbiAgICB9XG4gICAgc2hvd0xhc3RMb2coKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2dzLmxlbmd0aD09PTAgPyAnTm8gbG9nZ2VyIGhhcHBlbmQnIDogdGhpcy5sb2dzW3RoaXMubG9ncy5sZW5ndGgtMV0pO1xuICAgIH1cbiAgICBzaG93QWxsTG9ncygpe1xuICAgICAgICB0aGlzLmxvZ3MuZm9yRWFjaChpdGVtPT5jb25zb2xlLmxvZyhpdGVtKSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvYXV0aGVudGljYXRpb24vbG9nZ2VyLnNlcnZpY2UudHMiXSwic291cmNlUm9vdCI6IiJ9