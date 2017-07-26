import { NgModule}       from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
// import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup/signup.component';

import { LoggerService } from './logger.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule,
  ],
  declarations: [
    AuthenticationComponent,
    SigninComponent,
    SignupComponent,
  ],
  providers:[LoggerService]
})
export class AuthenticationModule {}