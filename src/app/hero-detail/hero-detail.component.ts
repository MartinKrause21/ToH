import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Items } from '../mock-items';
import { FItems } from '../mock-items';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Item } from '../item';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  @Input() hero!: Hero;
  freeitems = FItems;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {}

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

  sellitem(item: Item): void {
      this.hero.money += item.price;
      item.isFree = true; 
      this.freeitems.push(item);
      this.deleteMsg(item);
      window.alert ('You successfully sold item')
  }

  deleteMsg(item:Item) {
    const index: number = this.hero.items.indexOf(item);
    if (index !== -1) {
        this.hero.items.splice(index, 1);
    }
  }

}