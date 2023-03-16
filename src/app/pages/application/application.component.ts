import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  constructor(private router: Router,
    private hero:HeroService,private firestore: Firestore) {}
  
    send(){
      alert('submitted succesfully')
      this.router.navigateByUrl('homepage')
    }
    giveData(f:any)
    {
      const collectionInstance = collection(this.firestore,'job');
      addDoc(collectionInstance,f.value).then(() =>{
        console.log(" Data Saved Succesfully")
        

      } )
      .catch((err)=>{
        console.log(err);
      })
    }
}

