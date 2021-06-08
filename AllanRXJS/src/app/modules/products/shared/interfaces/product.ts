import { ProductCategory } from './product-category';
import { Supplier } from './supplier';
import { StatusCode } from '../enums/status-code.enum';

export interface Product {
  id: number;
  productName: string;
  productCode?: string;
  description?: string;
  price?: number;
  categoryId?: number;
  category?: string;
  quantityInStock?: number;
  searchKey?: string[];
  supplierIds?: number[];
  status?: StatusCode;    // Identifies current status of the item
}

// Provided to demonstrate how to map to
// class instances.
export class ProductClass {
  id!: number;
  productName!: string;
  productCode?: string;
  description?: string;
  price?: number;
  category?: string;
  quantityInStock?: number;
  searchKey?: string[];
  inventoryValuation?: number;
  suppliers?: Supplier[];

  calculateValuation(): number {
    const price = this.price ? this.price : 0;
    const quantity = this.quantityInStock ? this.quantityInStock : 0;
    return price * quantity;
  }
}

// Provided to demonstrate merging parent and
// child data into individual rows
export interface ProductWithSupplierAndCategorie {
  id: number;
  productName: string;
  productCode?: string;
  description?: string;
  price?: number;
  quantityInStock?: number;
  supplier?: Supplier[];
  category?: ProductCategory;
}
