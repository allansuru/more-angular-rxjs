import { Product } from 'src/app/modules/products/shared/interfaces/product';

import { Injectable, Component } from '@angular/core';
import { ComponentEventHandler } from 'src/app/core/abstract-clasess/component-event-handler/component-event-handler';
import { ProductsAction } from '../enums/products-action.enum';


@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ComponentEventHandler<ProductsAction, Product> {

  constructor() {
    super();
  }


}
