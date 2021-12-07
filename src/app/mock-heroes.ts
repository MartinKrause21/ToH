import { Hero } from './hero';
import { FItems, Items } from './mock-items';

export const HEROES: Hero[] = [
  {id: 11, name: 'Dr Nice', money: 500,  items: [Items[0], Items[1]], freeItems : FItems},
  {id: 12, name: 'Narco', money: 800, items: [Items[1], Items[2]], freeItems : FItems},
  {id: 13, name: 'Martin',money: 150, items: [Items[2], Items[3]], freeItems : FItems},
  {id: 14, name: 'Alex', money: 200, items: [Items[4], Items[5]], freeItems : FItems},
  {id: 15, name: 'Marian', money: 112, items: [Items[5], Items[6]], freeItems : FItems}
];