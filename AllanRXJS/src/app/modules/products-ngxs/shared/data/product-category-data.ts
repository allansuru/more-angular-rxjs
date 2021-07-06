import { ProductCategory } from 'src/app/modules/products/shared/interfaces/product-category';

export class ProductCategoryData {

  static categories: ProductCategory[] = [
    {
      id: 1,
      name: 'Garden'
    },
    {
      id: 3,
      name: 'Toolbox'
    },
    {
      id: 5,
      name: 'Gaming'
    }
  ];
}
