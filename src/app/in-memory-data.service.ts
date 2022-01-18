import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Item } from './item'; 

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', money: 800, },
      { id: 12, name: 'Narco', money: 550, },
      { id: 13, name: 'Bombasto', money: 2000, },
      { id: 14, name: 'Celeritas', money: 1000, },
      { id: 15, name: 'Magneta', money: 400, },
      { id: 16, name: 'RubberMan', money: 500, },
      { id: 17, name: 'Dynama', money: 450,},
      { id: 18, name: 'Dr IQ', money: 300, },
      { id: 19, name: 'Magma', money: 200, },
      { id: 20, name: 'Tornado', money: 100, },
      { id: 21, name: 'Arnold', money: 10000, },
    ];

    const items = [
      { id: 11, name: 'Bat ', price: 800, },
      { id: 12, name: 'Hammer', price: 550, },
      { id: 13, name: 'AXE', price: 2000, },
      { id: 14, name: 'Sword', price: 1000, },
      { id: 15, name: 'Tazer', price: 400, },
      { id: 16, name: 'Pole', price: 2500, },
    ];
    return {heroes, items};
  }
  genId(heroes: Hero[], items: Item[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11 
    && items.length > 0 ? Math.max(...items.map(item => item.id)) +1 : 11;
  }

}