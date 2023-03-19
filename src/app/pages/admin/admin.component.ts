import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { Details } from 'src/app/interface/this';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  details!:Details[];
  constructor(private router :Router, private auth:AuthService){}

  ngOnInit(){
    this.get();
  }

//collection fetch and intilize
get(){
  this.auth.get().subscribe((data:Details[])=>{
  console.log(data)
  this.details=data;
  })
}
add(){
  this.router.navigate(['/booking']);

}




delete(id:any){
  let okConfirm =confirm("Are you sure ?")
  if(okConfirm){
    this.auth.delete(id)

  }
  alert('delete');
}

logout(){
  alert('do you want to logout ?')
  this.router.navigate(['/loginadmin'])
}
}
