import { Component, Input, OnInit } from '@angular/core';
import { FItems } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = FItems;

  selectedItem?: Item;
  onSelect(item: Item): void {
  this.selectedItem = item;
}

  constructor() { }
  ngOnInit(): void { }
}
