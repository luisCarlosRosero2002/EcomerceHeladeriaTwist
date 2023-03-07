import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public flagLogin:boolean = true;

  public constructor(){
    console.log("Login "+this.flagLogin);
  }

  public lisentFormLogin( res:number ){
    this.flagLogin =!this.flagLogin;
    console.log("Login "+this.flagLogin);
    
  }

}
