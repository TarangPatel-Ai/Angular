import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductV2Component } from "../product-v2/product-v2.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [CommonModule, ProductV2Component]
})
export class ProductListComponent {
f() {
throw new Error('Method not implemented.');
}

    products: Product[] = [];

    constructor(){
      this.products[0] = new Product("Nokia G21", 13000, "Description of Product 2", "https://iili.io/K20CdF9.jpg");
      this.products[1] = new Product("Samsung Galaxy F13", 12000, "Description of Product 1", "https://iili.io/K20CdF9.jpg");
      this.products[2] = new Product("iPhone 13", 70000, "Description of Product 3", "https://iili.io/K20CdF9.jpg");
    }

}
