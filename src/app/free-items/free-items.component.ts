import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Component, Input, OnInit } from '@angular/core';
import { FItems, Items } from '../mock-items';
import { Item } from '../item';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-free-items',
  templateUrl: './free-items.component.html',
  styleUrls: ['./free-items.component.css']
})

export class FreeItemsComponent implements OnInit {

  fitems = FItems;
  hero!: Hero;

  selectedItem?: Item;
  onSelect(item: Item): void {
  this.selectedItem = item;
}

  constructor(
    private location: Location,
    private heroService: HeroService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getHero();
   }

   getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  buyItem(item: Item): void {
    if (this.hero.money >= item.price){
      this.hero.money -=  item.price;
      item.isFree = false;
      this.hero.items.push(item);
      window.alert('Item has been bought');
    }
    
    if (this.hero.money <= item.price){
      item.isFree = true;
      window.alert('You dont have enough money');
    }

  }
}






