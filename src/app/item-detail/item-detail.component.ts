import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { Item } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item?: Item;
  
  @Output() deleteEvent = new EventEmitter <Item> ();
  callParrentDelete() {
    this.deleteEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

  sellitem() {
  }

}
