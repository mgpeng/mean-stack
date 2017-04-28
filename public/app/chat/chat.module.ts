import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatComponent,
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule {}