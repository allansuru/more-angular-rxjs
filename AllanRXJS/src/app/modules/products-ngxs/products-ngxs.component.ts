import { ComponentEvent } from './../../core/abstract-clasess/component-event-handler/component-event';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ProductActions } from './shared/state/products-ngxs.actions';
import { ProductsApiService } from './shared/services/products-api.service';
import { tap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Product, ProductSelected } from 'src/app/modules/products/shared/interfaces/product';

import { ProductStore } from './shared/state/products-ngxs.state';
import { ProductsService } from './shared/services/products.service';
import { ProductsAction } from './shared/enums/products-action.enum';


@Component({
  selector: 'products-ngxs',
  templateUrl: './products-ngxs.component.html',
  styleUrls: ['./products-ngxs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsNgxsComponent implements OnInit, OnDestroy {

  @Select(ProductStore.products)
  public products$?: Observable<Product[]>

  @Select(ProductStore.productSelected)
  public productSelected$?: Observable<Product>;

  @Select(ProductStore.productTitleSelected)
  public productTitleSelected$?: Observable<string>;

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store, private productsService: ProductsService) { }

  ngOnInit() {
    this.childComponentsInit();
    this.initStore();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private childComponentsActionReducer(event: ComponentEvent<ProductsAction, Product>) {
    switch (event.action) {
      case ProductsAction.SELECT_PRODUCT:
        this.store.dispatch(new ProductActions.SelectedProduct(event.data))
        break;

      default:
        break;
    }
  }

  private childComponentsInit() {
    this.productsService.onEvent
      .pipe(
        takeUntil(this.onDestroy$),
        tap((event) => {
          this.childComponentsActionReducer(event);
        })
      )
      .subscribe();

  }


  private initStore() {
    this.store.dispatch(new ProductActions.FetchProducts())
  }

}
