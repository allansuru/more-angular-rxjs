import { SupplierData } from './modules/products/shared/data/supplier-data';
import { ProductData } from './modules/products/shared/data/product-data';
import { Supplier } from './modules/products/shared/interfaces/supplier';
import { Product } from './modules/products/shared/interfaces/product';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppData implements InMemoryDbService {

  createDb(): { products: Product[], suppliers: Supplier[] } {
    const products = ProductData.products;
    const suppliers = SupplierData.suppliers;
    return {
      products,
      suppliers
    };
  }
}
