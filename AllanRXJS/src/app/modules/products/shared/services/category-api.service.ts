import { Injectable } from '@angular/core';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { ProductCategory } from '../interfaces/product-category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private apiService: HttpApiService) { }

  getCategories(): Observable<ProductCategory[]> {
    return this.apiService.get<ProductCategory[]>('productCategories');
  }

}
