import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'products-ngxs-details-table',
  templateUrl: './products-ngxs-details-table.component.html',
  styleUrls: ['./products-ngxs-details-table.component.scss']
})
export class ProductsNgxsDetailsTableComponent {

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any;


}
