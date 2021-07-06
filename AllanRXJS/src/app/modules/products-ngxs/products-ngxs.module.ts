import { ProductStore } from './shared/state/products-ngxs.state';
import { environment } from './../../../environments/environment.prod';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsNgxsComponent } from './products-ngxs.component';
import { ProductsNgxsRoutes } from './products-ngxs.routing';

;
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ProductsNgxsListComponent } from './products-ngxs-list/products-ngxs-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { ContentCardModule } from 'src/app/core/modules/content-card/content-card.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsNgxsRoutes,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    ContentCardModule,
    NgxsModule.forRoot([ProductStore], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()

  ],
  declarations: [ProductsNgxsComponent, ProductsNgxsListComponent]
})
export class ProductsNgxsModule { }
