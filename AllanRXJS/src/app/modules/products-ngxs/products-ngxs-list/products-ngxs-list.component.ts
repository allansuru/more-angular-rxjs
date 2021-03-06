import { ProductSelected } from './../../products/shared/interfaces/product';

import { Product } from 'src/app/modules/products/shared/interfaces/product';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { ProductsAction } from '../shared/enums/products-action.enum';

@Component({
  selector: 'products-ngxs-list',
  templateUrl: './products-ngxs-list.component.html',
  styleUrls: ['./products-ngxs-list.component.scss'],
})
export class ProductsNgxsListComponent {

  @Input() products$?: Observable<Product[]>;
  @Input() productSelected$?: any

  constructor(private productsService: ProductsService) { }

  public onSelected(productSelected: Product) {
    this.productsService.dispatchAction({
      action: ProductsAction.SELECT_PRODUCT,
      data: productSelected
    })
  }

}
