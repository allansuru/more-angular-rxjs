import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutes } from './products.routing';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutes
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
