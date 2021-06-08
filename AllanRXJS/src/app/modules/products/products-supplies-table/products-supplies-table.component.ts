
import { Component, Input } from '@angular/core';

@Component({
  selector: 'products-supplies-table',
  templateUrl: './products-supplies-table.component.html',
  styleUrls: ['./products-supplies-table.component.scss']
})
export class ProductsSuppliesTableComponent {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any;

  constructor() { }

}
