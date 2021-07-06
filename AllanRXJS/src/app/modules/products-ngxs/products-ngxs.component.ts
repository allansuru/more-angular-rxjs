import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ProductActions } from './shared/state/products-ngxs.actions';
import { ProductsApiService } from './shared/services/products-api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../products/shared/interfaces/product';
import { ProductStore } from './shared/state/products-ngxs.state';

@Component({
  selector: 'products-ngxs',
  templateUrl: './products-ngxs.component.html',
  styleUrls: ['./products-ngxs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsNgxsComponent implements OnInit {

  @Select(ProductStore.productsSelect)
  public products$?: Observable<Product[]>

  constructor(private store: Store, private productsApiService: ProductsApiService) { }

  ngOnInit() {
    this.initStore();
  }

  private initStore() {
    this.productsApiService.getProducts().pipe(
      tap((products) =>
        this.store.dispatch(new ProductActions.FetchProducts(products))
      )
    ).subscribe()

  }

}
