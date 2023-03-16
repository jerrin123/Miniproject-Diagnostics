import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  constructor(private hero: HeroService,private router:Router){}
data=this.hero.giveData()
 
  single:any
  ngOnInit() {
    let id= Number(localStorage.getItem('id'))
    this.single=this.data.filter(e=> e.id==id)
    console.log("name",this.single)

  }

 
}