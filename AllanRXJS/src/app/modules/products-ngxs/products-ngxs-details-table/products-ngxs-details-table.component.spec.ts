/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProductsNgxsDetailsTableComponent } from './products-ngxs-details-table.component';

describe('ProductsNgxsDetailsTableComponent', () => {
  let component: ProductsNgxsDetailsTableComponent;
  let fixture: ComponentFixture<ProductsNgxsDetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNgxsDetailsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNgxsDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
