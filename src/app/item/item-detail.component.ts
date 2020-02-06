import { Component, OnInit,Output ,EventEmitter} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {

    @Output() updateinfo = new EventEmitter();
    item: Item;
    public score: number;
    public minusnum:number;
    public show = false;
    edit = true;


    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }
    buttonTap(){
        this.item.goal +=1;
        this.show=true;
    }
    onDicrement(){
        this.item.goal -= 1;
        if(this.item.goal == 0){
            this.show = false;
        }
    }
    updateInfo(item){
        this.edit = true
        this.item.name = item.name;
        this.item.role = item.role;
    }

}
