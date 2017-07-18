webpackJsonp([7],{

/***/ 694:
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
var DetailComponent = (function () {
    function DetailComponent() {
        console.log('inside DetailComponent');
    }
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'my-product-detail',
        template: "\n    <div>The route is \"product/detail\".</div>\n    <div style=\"background:green\">\n       <router-outlet name=\"detail\"></router-outlet>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//  


/***/ }),

/***/ 700:
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
var detail_router_module_1 = __webpack_require__(701);
var detail_component_1 = __webpack_require__(694);
var DetailModule = (function () {
    function DetailModule() {
        console.log('inside DetailModule');
    }
    return DetailModule;
}());
DetailModule = __decorate([
    core_1.NgModule({
        imports: [
            detail_router_module_1.DetailRouterModule
        ],
        declarations: [detail_component_1.DetailComponent],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], DetailModule);
exports.DetailModule = DetailModule;


/***/ }),

/***/ 701:
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
var detail_component_1 = __webpack_require__(694);
var routes = [
    { path: 'item',
        // outlet: 'detail',  
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(6).then((function (require) { resolve(__webpack_require__(702)['ItemModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
    { path: '', component: detail_component_1.DetailComponent }
];
var DetailRouterModule = (function () {
    function DetailRouterModule() {
        console.log('inside DetailRouterModule');
    }
    return DetailRouterModule;
}());
DetailRouterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], DetailRouterModule);
exports.DetailRouterModule = DetailRouterModule;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvZGV0YWlsL2RldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2RldGFpbC9kZXRhaWwubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcm91dGUtc3R1ZHkvcHJvZHVjdC9kZXRhaWwvZGV0YWlsLnJvdXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBMEM7QUFZMUMsSUFBYSxlQUFlO0lBQUU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFBQSxzQkFBQztBQUFELENBQUM7QUFGUyxlQUFlO0lBVjNCLGdCQUFTLENBQUM7UUFDVCx1QkFBdUI7UUFDdkIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsaUtBS1Q7S0FDRixDQUFDOztHQUNXLGVBQWUsQ0FFeEI7QUFGUywwQ0FBZTtBQUkxQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTCxvQ0FBOEM7QUFFOUMsc0RBQTREO0FBQzVELGtEQUF3RDtBQVV4RCxJQUFhLFlBQVk7SUFBRztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUFBLG1CQUFDO0FBQUQsQ0FBQztBQUZTLFlBQVk7SUFQeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AseUNBQWtCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFLENBQUMsa0NBQWUsQ0FBQztRQUMvQixTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7O0dBQ1csWUFBWSxDQUVyQjtBQUZTLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J6QixvQ0FBcUQ7QUFDckQsdUNBQXVEO0FBRXZELGtEQUEyRDtBQUUzRCxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxNQUFNO1FBQ1osc0JBQXNCO1FBQ3RCLFlBQVksRUFBRSxjQUFNLFdBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxJQUFNLG1EQUEyQixVQUFVLE9BQVksSUFBTyxPQUFPLENBQUMsbUJBQU8sQ0FBQyxHQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsZ0VBQUMsQ0FBQyxFQUFDLENBQUMsRUFBdkosQ0FBdUosRUFBRTtJQUMvSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUcsU0FBUyxFQUFFLGtDQUFlLEVBQUU7Q0FDMUMsQ0FBQztBQU1GLElBQWEsa0JBQWtCO0lBQzdCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUM7QUFKWSxrQkFBa0I7SUFKOUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUU7UUFDMUMsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtLQUMxQixDQUFDOztHQUNXLGtCQUFrQixDQUk5QjtBQUpZLGdEQUFrQiIsImZpbGUiOiI3LmNodW5rLmNlYjgzYjY2ZDRmOWQ2ZjE3Y2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LXByb2R1Y3QtZGV0YWlsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2PlRoZSByb3V0ZSBpcyBcInByb2R1Y3QvZGV0YWlsXCIuPC9kaXY+XG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6Z3JlZW5cIj5cbiAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZGV0YWlsXCI+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbENvbXBvbmVudCB7Y29uc3RydWN0b3IoKXtcbiAgICBjb25zb2xlLmxvZygnaW5zaWRlIERldGFpbENvbXBvbmVudCcpO1xuICB9fVxuXG4gIC8vIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvcm91dGUtc3R1ZHkvcHJvZHVjdC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGV0YWlsUm91dGVyTW9kdWxlIH0gZnJvbSAnLi9kZXRhaWwucm91dGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBEZXRhaWxDb21wb25lbnQgfSAgICBmcm9tICcuL2RldGFpbC5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBEZXRhaWxSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRGV0YWlsQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxNb2R1bGUgeyBjb25zdHJ1Y3Rvcigpe1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgRGV0YWlsTW9kdWxlJyk7XG4gIH19XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2RldGFpbC9kZXRhaWwubW9kdWxlLnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGV0YWlsQ29tcG9uZW50IH0gICAgICAgZnJvbSAnLi9kZXRhaWwuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJ2l0ZW0nLFxuICAgIC8vIG91dGxldDogJ2RldGFpbCcsICBcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vaXRlbS9pdGVtLm1vZHVsZScpWydJdGVtTW9kdWxlJ10pOyAgfSk7fSkgfSxcbiAgeyBwYXRoOiAnJywgIGNvbXBvbmVudDogRGV0YWlsQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcykgXSxcbiAgZXhwb3J0czogWyBSb3V0ZXJNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxSb3V0ZXJNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgRGV0YWlsUm91dGVyTW9kdWxlJyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvZGV0YWlsL2RldGFpbC5yb3V0ZXIubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==