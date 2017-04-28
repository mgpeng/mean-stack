import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { RouteStudyComponent } from './route-study/route-study.component';

export const AppRoutes: Routes = [
  {
    path:'',
    // redirectTo:'route-study',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports:[RouterModule.forRoot(AppRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}

 // {
  //   path:'home',
  //   loadChildren:'app/home/home.module#HomeModule'
  // },
  // {
  //   path:'authentication',
  //   loadChildren:'app/authentication/authentication.module#AuthenticationModule'
  // },
  