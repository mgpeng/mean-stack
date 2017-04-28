import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
// import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup/signup.component';

export const AuthenticationRoutes: Routes = [{
  path: 'authentication',
  component: AuthenticationComponent,
  children: [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(AuthenticationRoutes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}