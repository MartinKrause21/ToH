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

  heroes: Hero[] = [];

  constructor(
    private location: Location,
    private heroService: HeroService,
  ) {}
  

  model = new formHero(18, '', '', '',);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new formHero(42, '', '');
  }

  skyDog(): formHero {
    const myHero =  new formHero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  goBack(): void {
    this.location.back();
  }

}