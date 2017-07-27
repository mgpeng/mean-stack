var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import * as io from 'socket.io-client';
var ChatService = (function () {
    function ChatService(_router, _authenticationService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
        if (this._authenticationService.isLoggedIn()) {
            this.socket = io();
        }
        else {
            this._router.navigate(['home']);
        }
    }
    ChatService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    ChatService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    ChatService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    ;
    return ChatService;
}());
ChatService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router, AuthenticationService])
], ChatService);
export { ChatService };
//# sourceMappingURL=chat.service.js.map