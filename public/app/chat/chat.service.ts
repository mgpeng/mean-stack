// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private socket: any;
  
  constructor(private _router:Router, private _authenticationService: AuthenticationService) {
    if (this._authenticationService.isLoggedIn()) {
      this.socket = io();
    } else {
      this._router.navigate(['home']);
    }
  }

  on(eventName:string, callback:any) {
    if (this.socket) {
      this.socket.on(eventName, function(data:any) {
        callback(data);
      });
    }
  };

  emit(eventName:string, data:any) {
    if (this.socket) {
      this.socket.emit(eventName, data);
    }
  };

  removeListener(eventName:string) {
    if (this.socket) {
      this.socket.removeListener(eventName);
    }
  };
} 