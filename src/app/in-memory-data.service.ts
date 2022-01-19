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
      { id: 11, name: 'Dr Nice', money: 800, life:100, strength: 40, },
      { id: 12, name: 'Narco', money: 550, life:58, strength: 100, },
      { id: 13, name: 'Bombasto', money: 2000, life:50, strength: 50, },
      { id: 14, name: 'Celeritas', money: 1000, life:70, strength: 44, },
      { id: 15, name: 'Magneta', money: 400, life:40, strength: 57, },
      { id: 16, name: 'RubberMan', money: 500, life:20, strength: 46, },
      { id: 17, name: 'Dynama', money: 450, life:10, strength: 49,},
      { id: 18, name: 'Dr IQ', money: 300, life:100, strength: 90, },
      { id: 19, name: 'Magma', money: 200, life:40, strength: 87, },
      { id: 20, name: 'Tornado', money: 100, life:58, strength: 77, },
      { id: 21, name: 'Arnold', money: 10000, life:55, strength: 64, },
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