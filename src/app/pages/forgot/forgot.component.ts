import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  
    email :  string = '';
  constructor(private auth : AuthService){}
  
   
forgotpassword()
{
  this.auth.forgotpassword(this.email);
  this.email = '';
}
}


