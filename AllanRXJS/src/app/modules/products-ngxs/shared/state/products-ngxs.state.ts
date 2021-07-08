import { Product } from 'src/app/modules/products/shared/interfaces/product';

import { State, Action, StateContext, Selector } from "@ngxs/store";
import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import { Injectable } from '@angular/core';
import { ProductState } from '../interfaces/product-state';
import { ProductActions } from './products-ngxs.actions';
import { ProductsApiService } from 'src/app/modules/products/shared/services/products-api.service';
import { tap } from 'rxjs/operators';


@State<ProductState>({
  name: 'ProductState',
  defaults: { products: [], productSelected: null }
})
@Injectable()
export class ProductStore {

  constructor(private productsApiService: ProductsApiService, ) { }

  @Action(ProductActions.FetchProducts)
  fetchProducts({ getState, patchState }: StateContext<ProductState>) {
    const state = getState();

    if (state && state.products.length) {
      return;
    }

    return this.productsApiService.getProducts().pipe(
      tap((products) => patchState({ products })))

  }

  @Selector()
  static productsSelect(state: ProductState): Product[] {
    return state.products;
  }

  @Action(ProductActions.SelectedProduct)
  selectProduct(ctx: StateContext<ProductState>, { productSelected }: any) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      productSelected
    })


  }




}
