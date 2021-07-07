import { Supplier } from '../../../products/shared/interfaces/supplier';
import { Product } from '../../../products/shared/interfaces/product';
import { ProductCategory } from 'src/app/modules/products/shared/interfaces/product-category';

export interface ProductState {
  products: Product[];
  productSelected?: any
}
