import { Injectable } from '@angular/core';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { Observable } from 'rxjs';
import { ProductCategory } from 'src/app/modules/products/shared/interfaces/product-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private apiService: HttpApiService) { }

  getCategories(): Observable<ProductCategory[]> {
    return this.apiService.get<ProductCategory[]>('productCategories');
  }

}
