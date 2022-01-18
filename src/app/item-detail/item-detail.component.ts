import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item?: Item;
  items: Item[] = [];
  
  @Output() deleteEvent = new EventEmitter <Item> ();
  callParrentDelete() {
    this.deleteEvent.emit();
  }

  constructor(
    private itemService: ItemService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    if (this.item) {
      this.itemService.updateItem(this.item)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }


}
