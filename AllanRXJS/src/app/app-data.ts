import { ProductCategoryData } from './modules/products/shared/data/product-category-data';
import { ProductCategory } from './modules/products/shared/interfaces/product-category';
import { SupplierData } from './modules/products/shared/data/supplier-data';
import { ProductData } from './modules/products/shared/data/product-data';
import { Supplier } from './modules/products/shared/interfaces/supplier';
import { Product } from './modules/products/shared/interfaces/product';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppData implements InMemoryDbService {

  createDb(): { products: Product[], suppliers: Supplier[], productCategories: ProductCategory[] } {
    const products = ProductData.products;
    const suppliers = SupplierData.suppliers;
    const productCategories = ProductCategoryData.categories;
    return {
      products,
      suppliers,
      productCategories
    };
  }
}
