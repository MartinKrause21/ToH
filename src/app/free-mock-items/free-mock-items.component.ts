import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Items } from '../mock-items';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-free-mock-items',
  templateUrl: './free-mock-items.component.html',
  styleUrls: ['./free-mock-items.component.css']
})
export class FreeMockItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
