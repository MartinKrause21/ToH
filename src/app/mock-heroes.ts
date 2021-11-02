import { Hero } from './hero';
import { Items } from './mock-items';

export const HEROES: Hero[] = [
  {id: 11, name: 'Dr Nice', money: 50,  items: [Items[0], Items[1]]},
  {id: 12, name: 'Narco', money: 20, items: [Items[1], Items[2]]},
  {id: 13, name: 'Martin',money: 40, items: [Items[2], Items[3]]},
  {id: 14, name: 'Alex', money: 80, items: [Items[4], Items[5]]},
  {id: 15, name: 'Marian', money: 90, items: [Items[5], Items[6]]}
];