import { Product } from 'src/app/modules/products/shared/interfaces/product';

import { State, Action, StateContext, Selector } from "@ngxs/store";
import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import { Injectable } from '@angular/core';
import { ProductState } from '../interfaces/product-state';
import { ProductActions } from './products-ngxs.actions';


@State<ProductState>({
  name: 'ProductState',
  defaults: { products: [], productCategory: {}, suppliers: [] }
})
@Injectable()
export class ProductStore {

  @Action(ProductActions.FetchProducts)
  @ImmutableContext()
  fetchProducts({ setState }: StateContext<ProductState>, { products }: any) {
    setState(state => {
      state.products.push(...products);
      return state;
    })
  }

  @Selector()
  static productsSelect(state: ProductState): Product[] {
    return state.products;
  }

}
