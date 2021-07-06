import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsNgxsComponent } from './products-ngxs.component';
import { ProductsNgxsRoutes } from './products-ngxs.routing';

@NgModule({
  imports: [
    CommonModule,
    ProductsNgxsRoutes
  ],
  declarations: [ProductsNgxsComponent]
})
export class ProductsNgxsModule { }
