import { LoggerService } from './logger.service';
import { Component } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'authentication',
  templateUrl:'./authentication.component.html'
})
export class AuthenticationComponent {
   constructor(private _logger:LoggerService){
     _logger.showAllLogs();
   }
 }

 // templateUrl: 'app/authentication/authentication.component.html'