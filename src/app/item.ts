export interface Item {
    id: number;
    name: string;
    price: number;
    isFree:boolean;
  }

  export class formItem {

    constructor(
      public id: number,
      public name: string,
      public price:number,
    ) {  }
  
  }