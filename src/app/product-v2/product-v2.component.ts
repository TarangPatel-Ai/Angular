import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-v2',
  imports: [],
  templateUrl: './product-v2.component.html',
  styleUrl: './product-v2.component.css'
})
export class ProductV2Component {

    product:Product = new Product("Nokia G21", 13000, "Description of Product 2", "https://placehold.co/600x400");


  @Input('var1') messageFromParent!:string;

  f=()=>{
    console.log(this.messageFromParent);
  }

}
