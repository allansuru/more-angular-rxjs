import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetailsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'cost', 'minQuantity'];

  constructor(public productsService: ProductsService, ) { }

  ngOnInit(): void {
  }

}
