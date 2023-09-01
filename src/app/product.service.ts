import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProduct(): Observable<any[]> {
    return this.http.get<any[]>("https://fakestoreapi.com/products").pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getProductById(id: number): Observable<any> {
    return this.getProduct().pipe(
      map((products: any[]) => {
        const product = products.find(item => item.id === id);
        return product;
      })
    );
  }
}
