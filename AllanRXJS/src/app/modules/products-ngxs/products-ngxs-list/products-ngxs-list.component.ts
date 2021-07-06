import { Product } from 'src/app/modules/products/shared/interfaces/product';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'products-ngxs-list',
  templateUrl: './products-ngxs-list.component.html',
  styleUrls: ['./products-ngxs-list.component.scss'],
})
export class ProductsNgxsListComponent implements OnInit {

  @Input() products$?: Observable<Product[]>;



  constructor() { }

  ngOnInit() {

  }

  public onSelected(productId: number) {

  }

}
