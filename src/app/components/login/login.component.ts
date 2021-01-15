import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivationStart, CanActivate, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'mg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor( private router: Router,
    private userSevice: UsuarioService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.userSevice.authState$.subscribe(authState=>{
      if(authState){
        this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || '/');
      }else{
        this.router.navigateByUrl('/login');
      }
    })

    
  }



  login(form:NgForm){
    const email = this.email;
    const password = this.password;

    if(form.invalid){
      return;
    }
    form.reset();
    this.userSevice.loginUser(email,password);
    }
    

}
