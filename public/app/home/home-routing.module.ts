import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';
import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule{}