import { LoadingService } from './../../../../core/modules/loading/loading.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductsAPIService } from './products-api.service';
import { Product } from '../interfaces/product';
import { map, tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products$: Observable<Product[]> = this.productsAPIService.getProducts();
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

  constructor(private productsAPIService: ProductsAPIService, public loadingService: LoadingService) {
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
