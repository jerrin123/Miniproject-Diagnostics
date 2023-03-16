import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router,
    private hero:HeroService) {}
  menu=this.hero.giveData();
    gotohere(id: any){
      localStorage.setItem('id',id);
      this.router.navigate(['/single']);
    }

}
