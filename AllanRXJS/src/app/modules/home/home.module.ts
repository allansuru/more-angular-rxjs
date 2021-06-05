import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    MatCardModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
