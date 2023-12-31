import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDataList:any =[];
  productList= new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getProductData()
  {
    return this.productList.asObservable();
  }

  setProduct(product:any)
  {
    this.cartDataList.push(...product);
    this.productList.next(product)
  }
  addToCart(product:any)
  {
    this.cartDataList.push(product)
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
  }
  getTotalAmount(): number
  {
    let grandTotal =0;
    this.cartDataList.map((a:any)=>{
      grandTotal+=a.total;
    })
    return grandTotal;
  }

  removeCartData(product:any)
  {
    this.cartDataList.map((a:any, index:any)=>{
      if(product.id === a.id)
      {
        this.cartDataList.splice(index,1)
      }
    })
    this.productList.next(this.cartDataList)
  }

  removeAllCart()
  {
    this.cartDataList=[]
    this.productList.next(this.cartDataList)
  }

}
