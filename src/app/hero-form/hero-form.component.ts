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

  constructor(
    private location: Location,
    private heroService: HeroService,
  ) {}
  

  model = new formHero(18, '' ,'' , '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new formHero(42 ,'','','', '');
  }

  goBack(): void {
    this.location.back();
  }

}