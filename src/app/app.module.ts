import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule,Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = 
[
  { path: '', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(routes), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
