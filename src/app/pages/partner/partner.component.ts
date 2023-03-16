import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent {
  constructor(private router: Router,
    private hero:HeroService,private firestore: Firestore){}

    send(){
      alert('submitted succesfully')
      this.router.navigateByUrl('homepage')
    }
    inData(f:any)
    {
      const collectionInstance = collection(this.firestore,'partner');
      addDoc(collectionInstance,f.value).then(() =>{
        console.log(" Data Saved Succesfully")
        

      } )
      .catch((err)=>{
        console.log(err);
      })
    }
}
