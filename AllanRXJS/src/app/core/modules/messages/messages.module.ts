import { MessagesService } from './messages.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';

import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [MessagesComponent],
  exports: [MessagesComponent],
  providers: [MessagesService]
})
export class MessagesModule { }
