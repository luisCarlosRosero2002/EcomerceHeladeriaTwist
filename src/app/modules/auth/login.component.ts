import { Component } from '@angular/core';
import { BasicUser } from './models/users.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: BasicUser = new BasicUser();
  public flagLogin:boolean = true;

  public constructor(private authService:AuthService){}

  public lisentFormLogin( res:number ){
    this.flagLogin =!this.flagLogin;
  }

  public onLogin(){
    const input = [
      { usuario: this.user.name , password: this.user.password }
    ];
    
    console.log(input);
   
    this.authService.authentication(input).subscribe(
      res => {
        console.log(res);
        
        // if(res){

        // }else{

        // }
      }
    )
    
    
  }

  public onRegister(){

  }

}
