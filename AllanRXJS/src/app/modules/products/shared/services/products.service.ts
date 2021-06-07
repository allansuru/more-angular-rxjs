import { LoadingService } from './../../../../core/modules/loading/loading.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { Injectable, Component } from '@angular/core';
import { ProductsApiService } from './products-api.service';
import { Product } from '../interfaces/product';
import { map, tap, shareReplay } from 'rxjs/operators';
import { SuppliersService } from './suppliers.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products$: Observable<Product[]> = this.productsApiService.getProducts();
  private productSelectedSubject = new BehaviorSubject<number>(0);
  productSelectedAction$ = this.productSelectedSubject.asObservable();

  selectedProduct$ = combineLatest([
    this.products$,
    this.productSelectedAction$
  ]).pipe(
    map(([products, selectedProductId]) =>
      products.find(product => product.id === selectedProductId)
    ),
    tap(product =>
      console.log('selectedProduct', product)
    ),
    shareReplay(1)
  );

  productWithSupplier$ = combineLatest([
    this.selectedProduct$,
    this.suppliersService.suppliers$,
  ]).pipe(
    map(([product, suppliers]) => {
      return {
        ...product,
        suppliers: suppliers.filter(s => product?.supplierIds?.includes(s.id))
      };
    }),
    shareReplay(1)
  ).subscribe(teste => {
    debugger
  });

  constructor(
    private productsApiService: ProductsApiService,
    public loadingService: LoadingService,
    private suppliersService: SuppliersService) {
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
