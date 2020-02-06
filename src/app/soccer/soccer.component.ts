import { Component, OnInit } from '@angular/core';
import { Item } from "../item/item";
import { ItemService } from "../item/item.service";

@Component({
  selector: 'ns-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {
  items: Array<Item>;

  constructor( private itemService: ItemService ) { }

  ngOnInit() {
    this.items = this.itemService.getPlayers();
  }
  addsoccer(data){
    var soccer = {
      id: this.itemService.getLength() + 1,
      name: data.name,
      role: data.role,
      goallabel:data.goallabel,
      goal:data.goal,
      type:"Soccer"
    }
    this.itemService.addItem(soccer);
    this.items.unshift(soccer);
  }
}