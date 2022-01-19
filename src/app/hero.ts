import { Item } from "./item";

export interface Hero {
    id: number;
    name: string;
    money: number;
    strength: number;
    life: number;


    items: Item [];
    freeItems : Item [];
  }