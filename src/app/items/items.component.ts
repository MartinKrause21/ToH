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



}
