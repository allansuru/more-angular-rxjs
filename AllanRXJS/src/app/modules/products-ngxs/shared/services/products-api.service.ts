
import { Observable } from 'rxjs';
import { HttpApiService } from './../../../../core/services/http-api.service';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/modules/products/shared/interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private apiService: HttpApiService) { }

  getProducts(): Observable<Product[]> {
    return this.apiService.get<Product[]>('products');
  }

}
