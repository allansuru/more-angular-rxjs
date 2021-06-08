import { ProductsService } from './shared/services/products.service';
import { ContentCardModule } from './../../core/modules/content-card/content-card.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutes } from './products.routing';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { LoadingModule } from 'src/app/core/modules/loading/loading.module';
import { SuppliersService } from './shared/services/suppliers.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutes,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    ContentCardModule,
    LoadingModule
  ],
  declarations: [ProductsComponent, ProductsListComponent, ProductsDetailsComponent],
  providers: [ProductsService, SuppliersService]
})
export class ProductsModule { }
