import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
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
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
                  BrowserModule ,HttpModule,FormsModule,
                  CoreModule,

                  ChatModule,
                  
                  ArticlesModule,
                  AuthenticationModule,    
                  HomeModule,    
                  RouteStudyModule,   
                  AppRoutingModule,        
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }