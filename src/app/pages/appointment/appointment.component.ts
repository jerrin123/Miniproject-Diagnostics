import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  AddForm!:FormGroup;
  constructor(private fb: FormBuilder,private auth:AuthService,private router :Router){


  this.AddForm=this.fb.group({
    Name:['',[Validators.required]],
    Email:['',[Validators.required]],
    Phone:['',[Validators.required]],
    Doctors:['',[Validators.required]],
    Message:['',[Validators.required]],


  })
}
  add(){
    const details = this.AddForm.value;
    console.log(details);
    this.auth.add(details).then((res)=>{
      if(res){
        alert('Submit Successfully')
        this.AddForm.reset();
        this.router.navigate(['/doctor'])
      }
      else{
        console.log('Data Not Added ')
      }
    })

  }
}
