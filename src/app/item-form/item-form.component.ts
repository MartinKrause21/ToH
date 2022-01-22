import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { ItemService } from '../item.service';
import { formItem, Item } from '../item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  items: formItem[] = [];
  item: Item[]=[];

  id!: number;
  name!: string;
  price!: number;

  constructor(
    private location: Location,
    private itemService: ItemService,
  ) {}
  

  model = new formItem(this.id, this.name, this.price);

  submitted = false;

  onSubmit() { 
    
      this.submitted = true;

      console.log(this.model);

      this.itemService.addItem( this.model as Item)
      .subscribe(item => {this.items.push(item); }); 
      
  }

  goBack(): void {
    this.location.back();
  }
}