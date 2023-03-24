import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent {
  // constructor(private router: Router,
    // private hero:HeroService,private firestore: Firestore){}

    // send(){
      // alert('submitted succesfully')
      // this.router.navigateByUrl('homepage')
    // }
    // inData(f:any)
    // {
      // const collectionInstance = collection(this.firestore,'partner');
      // addDoc(collectionInstance,f.value).then(() =>{
        // console.log(" Data Saved Succesfully")
        

      // } )
      // .catch((err)=>{
        // console.log(err);
      // })
    // }
  
    ThisForm!:FormGroup;
  constructor(private fb: FormBuilder,private auth:AuthService,private router :Router){


  this.ThisForm=this.fb.group({
    Name:['',[Validators.required]],
    Email:['',[Validators.required]],
    Phone:['',[Validators.required]],
    // Doctors:['',[Validators.required]],
    Namee:['',[Validators.required]],
    


  })
}
  addp(){
    const detail = this.ThisForm.value;
    console.log(detail);
    this.auth.addp(detail).then((res)=>{
      if(res){
        alert('Submit Successfully')
        this.ThisForm.reset();
        this.router.navigate(['/partnerpage'])
      }
      else{
        console.log('Data Not Added ')
      }
    })

  }
}
