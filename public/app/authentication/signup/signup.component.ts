import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  providers:[LoggerService]
})
export class SignupComponent {
  errorMessage: string;
  user: any = {};

  constructor (
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _loger:LoggerService
  ) {}

  signup() {
    this._loger.showLastLog();
    this._authenticationService.signup(this.user)
    .subscribe(result  => this._router.navigate(['/']),
    error =>  this.errorMessage = error);
  }
}