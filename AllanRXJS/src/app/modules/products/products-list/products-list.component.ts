import { LoadingService } from './../../../core/modules/loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { of, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../shared/interfaces/product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  // Selected product to highlight the entry
  selectedProduct$ = this.productsService.selectedProduct$;

  constructor(public productsService: ProductsService, public loadingService: LoadingService) {

  }

  ngOnInit(): void {
  }

  onSelected(productId: number): void {
    this.productsService.selectedProductChanged(productId);
  }

}
