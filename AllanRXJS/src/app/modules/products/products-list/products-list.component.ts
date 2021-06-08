import { LoadingService } from './../../../core/modules/loading/loading.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';


@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
