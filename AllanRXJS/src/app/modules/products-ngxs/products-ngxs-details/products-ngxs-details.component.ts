import { Product } from 'src/app/modules/products/shared/interfaces/product';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'products-ngxs-details',
  templateUrl: './products-ngxs-details.component.html',
  styleUrls: ['./products-ngxs-details.component.scss']
})
export class ProductsNgxsDetailsComponent implements OnInit {

  @Input() productTitleSelected$?: Observable<string>;
  @Input() productSelected$?: Observable<Product>;

  constructor() { }

  ngOnInit() {
  }

}
