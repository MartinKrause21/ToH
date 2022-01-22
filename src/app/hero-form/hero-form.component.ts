import { Component, Input } from '@angular/core';
import { formHero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  heroes: formHero[] = [];
  hero: Hero[]=[];

  id!: number;
  name!: string;
  money!: number;
  life!: number;
  strength!: number;

  constructor(
    private location: Location,
    private heroService: HeroService,
  ) {}
  

  model = new formHero(this.id, this.name, this.money, this.life, this.strength);

  submitted = false;

  onSubmit() { 
    
      this.submitted = true;

      console.log(this.model);

      this.heroService.addHero( this.model as Hero)
      .subscribe(hero => {this.heroes.push(hero); }); 
      
  }

  goBack(): void {
    this.location.back();
  }
  
  @Input()
  maxlength!: number;

  
}