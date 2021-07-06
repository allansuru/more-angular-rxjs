
import { Supplier } from './shared/interfaces/supplier';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, tap, flatMap, mergeMap, concatAll, concatMap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  idsSelecteds = of(1, 2);
  listSuppliers: any[] = [];

  ngOnInit(): void {
    this.idsSelecteds.pipe(
      mergeMap((id) => this.http.get<Supplier>(`${environment.baseUrl}suppliers/${id}`)),
      map(({ name, cost, minQuantity, id }) => ({ id, name, total: cost * minQuantity })),
      tap(resp => {
        this.listSuppliers = [...this.listSuppliers, resp];
        console.log(resp);
      })
    ).subscribe();
  }

}
