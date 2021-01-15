import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegisterComponent } from './components/register/register.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    ProductosComponent,
    RegisterComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
