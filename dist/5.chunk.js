webpackJsonp([5],{

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(3);\r\nvar test_service_1 = __webpack_require__(694);\r\nvar ListComponent = (function () {\r\n    function ListComponent(_ts) {\r\n        this._ts = _ts;\r\n        _ts;\r\n    }\r\n    return ListComponent;\r\n}());\r\nListComponent = __decorate([\r\n    core_1.Component({\r\n        // moduleId: module.id,\r\n        selector: 'my-product-list',\r\n        template: \"\\n    <div>The route is \\\"product/list\\\".</div>\\n  \"\r\n    }),\r\n    __metadata(\"design:paramtypes\", [test_service_1.TestService])\r\n], ListComponent);\r\nexports.ListComponent = ListComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjk3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50LXNyYy9hcHAvcm91dGUtc3R1ZHkvcHJvZHVjdC9saXN0L2xpc3QuY29tcG9uZW50LnRzP2RkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXN0U2VydmljZSB9IGZyb20gJy4uL3Rlc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LXByb2R1Y3QtbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5UaGUgcm91dGUgaXMgXCJwcm9kdWN0L2xpc3RcIi48L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdHM6VGVzdFNlcnZpY2Upe1xuICAgIF90cztcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9jbGllbnQtc3JjL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2xpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFQQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFEQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///697\n");

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(3);\r\nvar list_router_module_1 = __webpack_require__(705);\r\nvar list_component_1 = __webpack_require__(697);\r\nvar ListModule = (function () {\r\n    function ListModule() {\r\n    }\r\n    return ListModule;\r\n}());\r\nListModule = __decorate([\r\n    core_1.NgModule({\r\n        imports: [\r\n            list_router_module_1.ListRouterModule\r\n        ],\r\n        declarations: [list_component_1.ListComponent],\r\n        providers: []\r\n    })\r\n], ListModule);\r\nexports.ListModule = ListModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50LXNyYy9hcHAvcm91dGUtc3R1ZHkvcHJvZHVjdC9saXN0L2xpc3QubW9kdWxlLnRzPzhjNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMaXN0Um91dGVyTW9kdWxlIH0gZnJvbSAnLi9saXN0LnJvdXRlci5tb2R1bGUnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9ICAgICAgICAgZnJvbSAnLi9saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBMaXN0Um91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0xpc3RDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFsgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0TW9kdWxlIHsgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItcm91dGVyLWxvYWRlci9zcmMhLi9jbGllbnQtc3JjL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2xpc3QvbGlzdC5tb2R1bGUudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///704\n");

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(3);\r\nvar router_1 = __webpack_require__(19);\r\nvar list_component_1 = __webpack_require__(697);\r\nvar routes = [\r\n    { path: '',\r\n        outlet: 'product',\r\n        component: list_component_1.ListComponent }\r\n];\r\nvar ListRouterModule = (function () {\r\n    function ListRouterModule() {\r\n    }\r\n    return ListRouterModule;\r\n}());\r\nListRouterModule = __decorate([\r\n    core_1.NgModule({\r\n        imports: [router_1.RouterModule.forChild(routes)],\r\n        exports: [router_1.RouterModule]\r\n    })\r\n], ListRouterModule);\r\nexports.ListRouterModule = ListRouterModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50LXNyYy9hcHAvcm91dGUtc3R1ZHkvcHJvZHVjdC9saXN0L2xpc3Qucm91dGVyLm1vZHVsZS50cz8zNzJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSAgICAgICAgIGZyb20gJy4vbGlzdC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJyxcbiAgICBvdXRsZXQ6ICdwcm9kdWN0JywgXG4gICAgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcykgXSxcbiAgZXhwb3J0czogWyBSb3V0ZXJNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Um91dGVyTW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvYW5ndWxhci1yb3V0ZXItbG9hZGVyL3NyYyEuL2NsaWVudC1zcmMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvbGlzdC9saXN0LnJvdXRlci5tb2R1bGUudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///705\n");

/***/ })

});