import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  errorMessage: string;
  credentials: any = {};

  constructor (
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _logger:LoggerService
  ) {
    _logger.showAllLogs();
  }

  signin() {
    this._logger.showLastLog();
    this._authenticationService.signin(this.credentials)
        .subscribe(result  => this._router.navigate(['/']),
      error =>  this.errorMessage = error );
  }
}