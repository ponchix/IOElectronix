import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { stringify } from 'querystring';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
auth:boolean=false;
private SERVER_URL = environment.serverURL;
private usuario;
authState$: BehaviorSubject<unknown> = new BehaviorSubject<Boolean>(this.auth);
UserData$:BehaviorSubject<unknown> = new BehaviorSubject<SocialUser | ResponseModel>(null);

  constructor(private authService:SocialAuthService,
    private httpClient:HttpClient ) { 
      authService.authState.subscribe((user: SocialUser)=>{
        if(user != null){
          this.auth=true;
          this.authState$.next(this.auth);
          this.UserData$.next(user);
        }
      });


    }
    loginUser(email:string, password:string){

      this.httpClient.post(`${this.SERVER_URL}auth/login`,{email, password})
      .subscribe((data: ResponseModel)=>{
        this.auth=data.auth;
        this.authState$.next(this.auth);
        this.UserData$.next(data);
      });
    }

    RegisterUser(email:string, password:string, nombre:string,
                apellidoM:string, apellido:string, edad:number){

      this.httpClient.post(`${this.SERVER_URL}auth/register`,{nombre,email,password,apellidoM,apellido,edad})
      .subscribe((data: ResponseModel)=>{
        //this.auth=data.auth;
        this.authState$.next(this.auth);
        this.UserData$.next(data);
      });
    }

googleAuth(){
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}

logOut(){
  this.authService.signOut();
  this.auth=false;
  this.authState$.next(this.auth);
}



}
export interface ResponseModel{
token:String;
auth:boolean;
email:string;
username:string;
apellido:string;
apellidoM:string;
photoURL:string;
id:number;
edad:string;
}