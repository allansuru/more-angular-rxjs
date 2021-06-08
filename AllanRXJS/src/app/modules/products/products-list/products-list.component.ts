import { LoadingService } from './../../../core/modules/loading/loading.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';


@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {

  constructor(
    public productsService: ProductsService,
    public loadingService: LoadingService) {

  }

  onSelected(productId: number): void {
    this.productsService.selectedProductChanged(productId);
  }

}
