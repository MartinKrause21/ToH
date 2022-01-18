import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  items: Item[] = [];

  constructor(
    private heroService: HeroService,
    private itemService: ItemService,
    ) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getItems();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 4));
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items.slice(1, 4));
  }

}
