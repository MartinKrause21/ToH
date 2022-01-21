import { Component } from '@angular/core';
import { formHero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  heroes: formHero[] = [];

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

  onSubmit() { this.submitted = true; console.log(this.model); return}

  goBack(): void {
    this.location.back();
  }


}