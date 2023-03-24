 import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private router: Router,
    private hero:HeroService,private firestore: Firestore) {}
  contact=this.hero.giveData();
    gotohere(id: any){
      localStorage.setItem('id',id);
      this.router.navigate(['/single']);
    }
    submit(){
      alert('submitted succesfully')
      this.router.navigate(['homepage'])
    }
    addData(f:any)
    {
      const collectionInstance = collection(this.firestore,'contact');
      addDoc(collectionInstance,f.value).then(() =>{
        console.log(" Data Saved Succesfully")
      } )
      .catch((err)=>{
        console.log(err);
      })
    }
}
