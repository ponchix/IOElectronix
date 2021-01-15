import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { map } from 'rxjs/operators';
import { ArticulosService } from 'src/app/services/crud.service';
import { ResponseModel, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'mg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

show:boolean=false;


art={
  id:null,
username:null,
email:null
    }
  myUser:any;

  email:string;
  password:string;
  nombre:string;
  apellido:string;
  apellidoM:string;
  edad:number;
  router: any;
  route: any;

  emailpatter: any = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
createFormGroup(){
  return new FormGroup({
    email:new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(this.emailpatter)]),
    nombre: new FormControl('',[Validators.required, Validators.minLength(4)])
  });
}

  constructor( private userSevice: UsuarioService,
       private userService: UsuarioService
   ) { }

  ngOnInit() {
    
  }
  
   
  
  
  registrar(form:NgForm){
    const email = this.email;
    const password = this.password;
    const nombre =this.nombre;
    const apellido = this.apellido;
    const apellidoM = this.apellidoM;
    const edad = this.edad;
    if(form.invalid){
      return;
    }
    form.reset();
    this.userSevice.RegisterUser(email,password,nombre,apellido,apellidoM,edad);
     }




}
