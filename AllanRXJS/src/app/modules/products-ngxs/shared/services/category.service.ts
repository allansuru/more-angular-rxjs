
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryApiService } from './category-api.service';
import { ProductCategory } from 'src/app/modules/products/shared/interfaces/product-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories$: Observable<ProductCategory[]> = this.getCategories();

  constructor(private categoryApiService: CategoryApiService) {
    this.getCategories();
  }

  getCategories(): Observable<ProductCategory[]> {
    return this.categoryApiService.getCategories();
  }

}
