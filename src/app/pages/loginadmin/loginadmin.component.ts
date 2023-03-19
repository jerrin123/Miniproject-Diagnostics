import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent {

  email :  string = '';
  password : string = '';
  constructor(private auth :AuthService,private router:Router){}

  adminlogin()
  {
    
    if(this.email == ''){
      alert('please enter email')
       return;
    }
    if(this.password == ''){
      alert('please enter password')
       return;
    }
       
    this.auth.adminlogin(this.email,this.password);
    this.email = '';
    this.password = '';
  }
}
