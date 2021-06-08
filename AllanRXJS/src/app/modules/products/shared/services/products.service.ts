import { ProductCategory } from './../interfaces/product-category';

import { LoadingService } from './../../../../core/modules/loading/loading.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { Injectable, Component } from '@angular/core';
import { ProductsApiService } from './products-api.service';
import { Product, ProductWithSupplierAndCategorie } from '../interfaces/product';
import { map, tap, shareReplay } from 'rxjs/operators';
import { SuppliersService } from './suppliers.service';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products$: Observable<Product[]> = this.productsApiService.getProducts();
  categories$: Observable<ProductCategory[]> = this.categoryService.categories$;
  // categories$: Observable<ProductCategory[]> this
  private productSelectedSubject = new BehaviorSubject<number>(0);
  productSelectedAction$ = this.productSelectedSubject.asObservable();

  selectedProduct$ = combineLatest([
    this.products$,
    this.productSelectedAction$
  ]).pipe(
    map(([products, selectedProductId]) =>
      products.find(product => product.id === selectedProductId) as Product
    ),
    tap(product =>
      console.log('selectedProduct', product)
    ),
    shareReplay(1)
  );


  productWithSupplierAndCategorie$ = combineLatest([
    this.selectedProduct$,
    this.suppliersService.suppliers$,
    this.categories$
  ]).pipe(
    map(([product, suppliers, categories]) => {
      return {
        ...product,
        supplier: suppliers.filter(s => product?.supplierIds?.includes(s?.id)),
        category: categories.filter(c => c.id === product?.categoryId)[0]
      } as ProductWithSupplierAndCategorie;
    }),
    shareReplay(1)
  )

  constructor(
    private productsApiService: ProductsApiService,
    public loadingService: LoadingService,
    private suppliersService: SuppliersService,
    private categoryService: CategoryService) {
    this.getProducts();
  }

  getProducts(): void {
    this.loadingService.showLoaderUntilCompleted(this.products$).subscribe();
  }

  // Change the selected product
  selectedProductChanged(selectedProductId: number): void {
    this.productSelectedSubject.next(selectedProductId);
  }

}
