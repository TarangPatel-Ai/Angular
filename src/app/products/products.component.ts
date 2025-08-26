import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

    name = 'Samsung Galaxy F13';
    price = 12000;
    description = 'Description of Product 1';
}
