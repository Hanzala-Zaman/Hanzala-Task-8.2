import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  products:any =[];
  allProducts:any =0 ;
constructor(private cartApi:CartService){}

ngOnInit(): void {

  this.cartApi.getProductData().subscribe(res=>
    {
      this.products=res;
      this.allProducts = this.cartApi.getTotalAmount();
      console.log(this.allProducts)
    })
}

removeProduct(item:any)
{
  this.cartApi.removeCartData(item);
}
removeAllProduct()
{
  this.cartApi.removeAllCart()
}
updateQuantity(product: any, action: 'increment' | 'decrement'): void {
  if (action === 'increment') {
    product.quantity++;
  } else if (action === 'decrement' && product.quantity > 0) {
    product.quantity--;
  }
}
}
