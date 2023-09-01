import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:any;
  constructor (private ProdApi:ProductService, private cartApi:CartService) {}

  ngOnInit(): void {
    this.ProdApi.getProduct().subscribe((res)=>{
      this.productList=res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
      console.log('Product List:', this.productList);
    })
  }
addtoCart(item:any)
{
  this.cartApi.addToCart(item)
}

}
