import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private router: Router,
    private hero:HeroService) {}
blog=this.hero.giveData();
    gotohere(id: any){
      localStorage.setItem('id',id);
      this.router.navigate(['/singleblog']);

}
}