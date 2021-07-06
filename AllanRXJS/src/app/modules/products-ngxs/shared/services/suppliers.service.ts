
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SuppliersApiService } from './suppliers-api.service';
import { LoadingService } from 'src/app/core/modules/loading/loading.service';
import { Supplier } from 'src/app/modules/products/shared/interfaces/supplier';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  suppliers$: Observable<Supplier[]> = this.suppliersApiService.getSuppliers();

  constructor(private suppliersApiService: SuppliersApiService, public loadingService: LoadingService) { }

  getSuppliers(): void {
    this.loadingService.showLoaderUntilCompleted(this.suppliers$).subscribe();
  }

}
