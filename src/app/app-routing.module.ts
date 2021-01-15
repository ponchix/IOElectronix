import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ProductComponent} from "./components/product/product.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/politicas/contacto/contacto.component';
import { PrivacidadComponent } from './components/politicas/privacidad/privacidad.component';
import { DevolucionComponent } from './components/politicas/devolucion/devolucion.component';
import { PreguntasComponent } from './components/politicas/preguntas/preguntas.component';
import { TerminosComponent } from './politicas/terminos/terminos.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: RegisterComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'carrito', component: CartComponent
  },
  {
    path: 'revisado', component: CheckoutComponent
  },
  {
    path: 'terminado', component: ThankyouComponent
  },
{
  path: 'catalogo', component: ProductosComponent
},
{
  path: 'contacto', component: ContactoComponent
},
{
  path: 'privacidad', component:PrivacidadComponent
},
{
  path:'devolucion', component:DevolucionComponent
},
{
  path:'preguntasfrecuentes',component:PreguntasComponent
},
{
  path: 'terminosycondiciones', component:TerminosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
