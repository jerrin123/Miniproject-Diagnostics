import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singleblog',
  templateUrl: './singleblog.component.html',
  styleUrls: ['./singleblog.component.css']
})
export class SingleblogComponent {


  constructor(private hero: HeroService,private router:Router){}
  data=this.hero.giveData()
   
    singleblog:any
    ngOnInit() {
      let id= Number(localStorage.getItem('id'))
      this.singleblog=this.data.filter(e=> e.id==id)
      console.log("name",this.singleblog)
  
}
}