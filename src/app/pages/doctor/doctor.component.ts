import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  constructor(private router: Router,
    private hero:HeroService) {}
  menu=this.hero.giveData();
    gotohere(id: any){
      localStorage.setItem('id',id);
      this.router.navigateByUrl('/appointment');
    }
}
