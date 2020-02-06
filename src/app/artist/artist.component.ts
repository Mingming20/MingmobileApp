import { Component, OnInit } from '@angular/core';
import { Item } from "../item/item";
import { ItemService } from "../item/item.service";

@Component({
  selector: 'ns-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  items: Array<Item>;

  constructor( private itemService: ItemService ) { }

  ngOnInit() {
    this.items = this.itemService.getArtists();
  }
  addartist(data){
    var artist = {
      id: this.itemService.getLength() + 1,
      name: data.name,
      role: data.role,
      goallabel:data.goallabel,
      goal:data.goal,
      type:"Artist"
    }
    this.itemService.addItem(artist);
    this.items.unshift(artist);
  }


}
