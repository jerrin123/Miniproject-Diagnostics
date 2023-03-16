import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.css']
})
export class AutomationComponent {
  constructor(private router: Router,
      private hero:HeroService) {}
    auto=this.hero.giveData();
      gotohere(id: any){
        localStorage.setItem('id',id);
        this.router.navigate(['/single']);
      }
}
