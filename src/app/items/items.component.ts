import { Component, Input, OnInit } from '@angular/core';
import { FItems } from '../mock-items';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  selectedItem?: Item;
  onSelect(item: Item): void {
  this.selectedItem = item;
}

  constructor(private itemService: ItemService) { }
  
  ngOnInit(){
    this.getItems();
   }

   getItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.itemService.addItem({ name } as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this.itemService.deleteItem(item.id).subscribe();
  }

  option: string = '';

  dropDownItems(event: any){
    this.option = event.target.value;


    if (this.option == "sort by id") {
      return this.items.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    }
    else if (this.option == "sort by name") {
      return this.items.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (this.option == "sort by money") {
      return this.items.sort((a, b) => a.price > b.price ? -1 : a.price < b.price ? 1 : 0);
    }

    return;
  }

}
