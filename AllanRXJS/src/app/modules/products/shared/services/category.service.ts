import { ProductCategory } from './../interfaces/product-category';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryApiService } from './category-api.service';

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
