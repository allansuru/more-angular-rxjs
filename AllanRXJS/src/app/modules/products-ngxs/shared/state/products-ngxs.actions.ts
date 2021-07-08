import { Product } from './../../../products/shared/interfaces/product';
export namespace ProductActions {
  export class FetchProducts {
    static readonly type = '[Product] Fetch Products'
  }

  export class SelectedProduct {
    static readonly type = '[Product] Selected Product'
    constructor(public productSelected: Product) { }
  }
}
