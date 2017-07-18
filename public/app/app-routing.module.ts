import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { RouteStudyComponent } from './route-study/route-study.component';

export const AppRoutes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports:[RouterModule.forRoot(AppRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}

  