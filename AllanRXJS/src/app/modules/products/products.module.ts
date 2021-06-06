import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutes } from './products.routing';

import { MatGridListModule } from '@angular/material/grid-list';
import { ProductsDetailsComponent } from './products-details/products-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutes,
    MatGridListModule
  ],
  declarations: [ProductsComponent, ProductsListComponent, ProductsDetailsComponent]
})
export class ProductsModule { }
