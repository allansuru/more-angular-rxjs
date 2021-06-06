import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRouteLink } from './core/enums/app-route-link.enum';

const routes: Routes = [
  { path: AppRouteLink.HOME, loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: '', pathMatch: 'full', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: AppRouteLink.PRODUCTS, loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
