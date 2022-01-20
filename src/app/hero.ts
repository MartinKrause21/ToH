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

  export class formHero {

    constructor(
      public id: number,
      public money:string,
      public name: string,
      public life: string,
      public strength: string,
    ) {  }
  
  }