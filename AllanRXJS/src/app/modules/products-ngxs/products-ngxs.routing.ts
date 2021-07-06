import { ProductsNgxsComponent } from './products-ngxs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductsNgxsComponent
  },
];

export const ProductsNgxsRoutes = RouterModule.forChild(routes);
