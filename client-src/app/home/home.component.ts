import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.scss']
})
export class HomeComponent {
  user: any;

  constructor (private _authenticationService: AuthenticationService) {
    this.user = _authenticationService.user;
  }
}