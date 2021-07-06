import { Product } from './../../../products/shared/interfaces/product';
export namespace ProductActions {
  export class FetchProducts {
    static readonly type = '[Product] Fetch Products'
    constructor(public products: any) { }
  }
}
