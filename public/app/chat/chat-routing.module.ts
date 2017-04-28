import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';

export const chatRoutes: Routes = [{
  path: 'chat',
  component: ChatComponent
}];

@NgModule({
  imports: [ RouterModule.forChild(chatRoutes) ],
  exports: [ RouterModule ]
})
export class ChatRoutingModule {}