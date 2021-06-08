
import { Component, Input } from '@angular/core';
import { Supplier } from '../shared/interfaces/supplier';

@Component({
  selector: 'products-supplies-table',
  templateUrl: './products-supplies-table.component.html',
  styleUrls: ['./products-supplies-table.component.scss']
})
export class ProductsSuppliesTableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: Supplier[] = [];

  constructor() { }



}
