
import { Component, Input, OnInit } from '@angular/core';
import { FItems } from '../mock-items';
import { Item } from '../item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-free-items',
  templateUrl: './free-items.component.html',
  styleUrls: ['./free-items.component.css']
})

export class FreeItemsComponent implements OnInit {

  items = FItems;

  selectedItem?: Item;
  onSelect(item: Item): void {
  this.selectedItem = item;
}

  constructor(
    private location: Location,
  ) { }
  ngOnInit(): void { }

  goBack(): void {
    this.location.back();
  }

}

