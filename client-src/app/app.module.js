var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './coremodule/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { ArticlesModule } from './articles/articles.module';
import { RouteStudyModule } from './route-study/route-study.module';
import { ChatModule } from './chat/chat.module';
// import { AuthenticationService } from './services/authentication.service';  
// import { ArticlesService } from './services/articles.service';
import { AppComponent } from './app.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule, HttpModule, FormsModule,
            CoreModule,
            ChatModule,
            ArticlesModule,
            AuthenticationModule,
            HomeModule,
            RouteStudyModule,
            AppRoutingModule,
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map