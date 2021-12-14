import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item?: Item;
  
  @Input() hidden: boolean = false;
  @Input() shown: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  isclick() {

  }

  isHidden() {
    this.hidden = ! this.hidden;
  }
  
  isShown() {
    this.shown = ! this.shown;
  }

}
