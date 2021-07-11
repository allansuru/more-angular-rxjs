import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from './content-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


@NgModule({

  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [ContentCardComponent],
  exports: [ContentCardComponent],

})
export class ContentCardModule { }
