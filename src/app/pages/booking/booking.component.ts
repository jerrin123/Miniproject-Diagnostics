import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  constructor(private router: Router,
    private hero:HeroService,private firestore: Firestore){}
    booknow(){
      alert('submitted succesfully')
      this.router.navigateByUrl('homepage')
    }
    sendData(f:any)
    {
      const collectionInstance = collection(this.firestore,'booking');
      addDoc(collectionInstance,f.value).then(() =>{
        console.log(" Data Saved Succesfully")
        

      } )
      .catch((err)=>{
        console.log(err);
      })
    }

}
