import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { map, filter } from 'rxjs/operators';
import { Product } from '../shared/interfaces/product';

@Component({
  selector: 'products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetailsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'cost', 'minQuantity'];

  // Set the page title
  pageTitle$ = this.productsService.selectedProduct$
    .pipe(
      filter(p => !!p),
      map((p: Product) =>
        p ? `Product Detail for: ${p.productName}` : null
      )
    )

  constructor(public productsService: ProductsService, ) { }

  ngOnInit(): void {
  }

}
