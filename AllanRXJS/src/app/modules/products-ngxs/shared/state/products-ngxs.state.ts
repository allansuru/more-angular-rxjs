import { Product, ProductSelected } from 'src/app/modules/products/shared/interfaces/product';

import { State, Action, StateContext, Selector } from "@ngxs/store";
import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import { Injectable } from '@angular/core';
import { ProductState } from '../interfaces/product-state';
import { ProductActions } from './products-ngxs.actions';
import { ProductsApiService } from 'src/app/modules/products/shared/services/products-api.service';
import { tap } from 'rxjs/operators';
import { CategoryApiService } from 'src/app/modules/products/shared/services/category-api.service';


@State<ProductState>({
  name: 'ProductState',
  defaults: { products: [], productSelected: null, categoryByProduct: [] }
})
@Injectable()
export class ProductStore {

  constructor(private productsApiService: ProductsApiService, private categoryApiService: CategoryApiService) { }

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
  static products(state: ProductState): Product[] {
    return state.products;
  }

  @Action(ProductActions.SelectedProduct)
  selectProduct({ getState, setState, dispatch }: StateContext<ProductState>, { productSelected }: ProductSelected) {
    const state = getState();

    setState({
      ...state,
      productSelected
    })

    dispatch(new ProductActions.GetCategoryByProduct(Number(productSelected?.categoryId)))

  }

  @Selector()
  static productSelected(state: ProductState): ProductSelected {
    return state.productSelected;
  }

  @Action(ProductActions.GetCategoryByProduct)
  getCategoryByProduct({ getState, patchState }: StateContext<ProductState>, { idCategory }: number | any) {
    const state = getState();

    return this.categoryApiService.getCategories().pipe(
      tap((categories) => {
        patchState({
          ...state,
          categoryByProduct: categories.filter(c => c.id === idCategory),
        })
      }))
  }



}
