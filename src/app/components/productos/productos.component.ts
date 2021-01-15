import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProductModelServer, serverResponse } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'mg-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  subcription:Subscription;
  products: ProductModelServer[] = [];
@ViewChild('myDiv') myDiv:any;
  constructor(private productService: ProductService,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: serverResponse) => {
      this.products = prods.products;
      console.log(this.products);
    });
    // this.subcription=this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(()=> window.scrollTo(0,0));
  }
  AddProduct(id: Number) {
    this.cartService.AddProductToCart(id);
  }
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }
  scrollbottom(){
    this.myDiv.nativeElement.scrollbottom=this.myDiv.nativeElement.scrollHeight;
  }
}
