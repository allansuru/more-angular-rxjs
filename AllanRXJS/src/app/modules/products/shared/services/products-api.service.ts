import { Observable } from 'rxjs';
import { HttpApiService } from './../../../../core/services/http-api.service';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsAPIService {

  constructor(private apiService: HttpApiService) { }

  getProducts(): Observable<Product[]> {
    return this.apiService.get<Product[]>('products');
  }

}
