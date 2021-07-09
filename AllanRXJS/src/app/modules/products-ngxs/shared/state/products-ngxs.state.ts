import {
  Product,
  ProductSelected,
} from 'src/app/modules/products/shared/interfaces/product';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import { Injectable } from '@angular/core';
import { ProductState } from '../interfaces/product-state';
import { ProductActions } from './products-ngxs.actions';
import { ProductsApiService } from 'src/app/modules/products/shared/services/products-api.service';
import { tap, map } from 'rxjs/operators';
import { CategoryApiService } from 'src/app/modules/products/shared/services/category-api.service';
import { SuppliersApiService } from 'src/app/modules/products/shared/services/suppliers-api.service';
import { forkJoin } from 'rxjs';

@State<ProductState>({
  name: 'ProductState',
  defaults: {
    products: [],
    productSelected: null,
    categoryByProduct: {},
    supplies: [],
  },
})
@Injectable()
export class ProductStore {
  constructor(
    private productsApiService: ProductsApiService,
    private categoryApiService: CategoryApiService,
    private suppliersApiService: SuppliersApiService
  ) { }

  @Action(ProductActions.FetchProducts)
  fetchProducts({ getState, patchState }: StateContext<ProductState>) {
    const state = getState();

    if (state && state.products.length) {
      return;
    }

    return this.productsApiService
      .getProducts()
      .pipe(tap((products) => patchState({ products })));
  }

  @Selector()
  static products(state: ProductState): Product[] {
    return state.products;
  }

  @Action(ProductActions.SelectedProduct)
  selectProduct(
    { getState, setState, dispatch }: StateContext<ProductState>,
    { productSelected }: ProductSelected
  ) {
    const state = getState();

    setState({
      ...state,
      productSelected,
    });

    dispatch(
      new ProductActions.GetCategoryAndSuppliesByProduct(
        Number(productSelected?.categoryId)
      )
    );
  }

  @Selector()
  static productSelected(state: ProductState): ProductSelected | undefined {
    return state.productSelected;
  }

  @Selector()
  static productTitleSelected(state: ProductState): string {
    return `Product Detail for: ${state.productSelected?.productName}`;
  }

  @Action(ProductActions.GetCategoryAndSuppliesByProduct)
  getCategoryByProduct(
    { getState, patchState }: StateContext<ProductState>,
    { idCategory }: number | any
  ) {
    const state = getState();

    // TODO 'Jogar as categories e supplies no state e validar se já tem ele no state e somente sentar o state com o novo'


    return forkJoin([this.categoryApiService.getCategories(), this.suppliersApiService.getSuppliers()]).pipe(
      map(([categories, supplies]) => {
        patchState({
          ...state,
          productSelected: {
            ...state.productSelected,
            category: categories.filter((c) => c.id === idCategory)[0],
          },
          categoryByProduct: categories.filter((c) => c.id === idCategory)[0],
          supplies: supplies.filter(s => state.productSelected.supplierIds.includes(s.id))
        });
      })
    )

  }
}
