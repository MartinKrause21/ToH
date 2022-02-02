import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import  { Items } from '../mock-items';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../data.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  userLogin: boolean = true;

  constructor(
    private heroService: HeroService,
    private dataService: DataService,
    ) { }


  ngOnInit() {
    this.getHeroes();
    this.userLogin = this.dataService.getStatus();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  option: string = '';

  dropDownChanged(event: any){
    this.option = event.target.value;


    if (this.option == "Sort by Id") {
      return this.heroes.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    }
    else if (this.option == "Sort by Name") {
      return this.heroes.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (this.option == "Sort by Money") {
      return this.heroes.sort((a, b) => a.money > b.money ? -1 : a.money < b.money ? 1 : 0);
    }

    return;
  }


}