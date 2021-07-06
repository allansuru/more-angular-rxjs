import { Injectable } from '@angular/core';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { Observable } from 'rxjs';
import { Supplier } from '../interfaces/supplier';

@Injectable({
  providedIn: 'root'
})
export class SuppliersApiService {

  constructor(private apiService: HttpApiService) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.apiService.get<Supplier[]>('suppliers');
  }

}
