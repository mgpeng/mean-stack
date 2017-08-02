import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouteStudyRoutingModule } from './route-study-routing.module';
import { RouteStudyComponent }         from './route-study.component';

@NgModule({
  imports: [
    BrowserModule,
    RouteStudyRoutingModule,
  ],
  declarations: [
    RouteStudyComponent,
  ],
  providers: [ ]
})
export class RouteStudyModule { }