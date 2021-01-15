import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartModelServer} from "../../models/cart.model";
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";
import {NgxSpinnerService} from "ngx-spinner";
import {CheckboxRequiredValidator, FormBuilder, NgForm, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {ArticulosService} from '../../services/crud.service';
@Component({
  selector: 'mg-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  direccion = null;

  dir={
    id:null,
      calle:null,
      calle2:null,
      ciudad:null,
      estado:null,
      pais:null,
      telefono:null,
      user_id:null
      }
  cartData: CartModelServer;
  cartTotal: any;
  showSpinner: Boolean;
  checkoutForm: any;
  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private  spinner: NgxSpinnerService,
              private fb: FormBuilder,
              private direc : ArticulosService) {

    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],

    });


  }

  ngOnInit() {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);

  }
  alta() {
    this.direc.alta(this.dir).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
                  }
    });
  
  }

  onCheckout() {
   this.spinner.show() 
      this.cartService.CheckoutFromCart(57);
     // this.alta();
    
  //console.log(this.checkoutForm.value);

  }

}
