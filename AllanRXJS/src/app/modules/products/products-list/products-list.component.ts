import { LoadingService } from './../../../core/modules/loading/loading.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Select } from '@ngxs/store';
import { ProductStore } from '../../products-ngxs/shared/state/products-ngxs.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {

  @Select(ProductStore.productTitleSelected)
  public productTitleSelected$?: Observable<string>;

  constructor(
    public productsService: ProductsService,
    public loadingService: LoadingService) {
    this.productTitleSelected$?.subscribe(teste => {
      debugger
    })

  }

  onSelected(productId: number): void {
    this.productsService.selectedProductChanged(productId);
  }

}
