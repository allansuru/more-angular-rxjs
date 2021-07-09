import { Product } from './../../../products/shared/interfaces/product';
import { ProductCategory } from 'src/app/modules/products/shared/interfaces/product-category';
export namespace ProductActions {
  export class FetchProducts {
    static readonly type = '[Product] Fetch Products'
  }

  export class SelectedProduct {
    static readonly type = '[Product] Selected Product'
    constructor(public productSelected: Product) { }
  }

  export class GetCategoryAndSuppliesByProduct {
    static readonly type = '[Product] Get Categories by Product'
    constructor(public idCategory: number) { }
  }


}
