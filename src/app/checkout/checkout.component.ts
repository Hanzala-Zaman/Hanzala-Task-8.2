import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  dob: string = '';

  registerForm = new FormGroup ({

    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    payMethod: new FormControl(""),
    address: new FormControl(""),
    mobilenumber: new FormControl(""),
   
  })
  submittedData: any

  saveinfo() {
    console.log(this.registerForm);
    this.submittedData = this.registerForm.value; 
  }
}
