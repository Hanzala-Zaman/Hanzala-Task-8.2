import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hanzala-Assignment8-Task2';

  totalItemNumber:number = 0;
  constructor (private cartApi:CartService) { }
  
  ngOnInit():void
  {
    this.cartApi.getProductData().subscribe(res=>
      {
        this.totalItemNumber = res.length;
      })

  }
}
