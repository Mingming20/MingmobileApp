import { Component, OnInit ,Input,Output,EventEmitter} from "@angular/core";

import { Item } from "./item";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    @Input() items: Array<Item>;
    @Output() data = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }
    request(details){
    //     // console.log('-----------------------',this.items[this.items.length-1].id + 1)
    //     // details.id = this.items[this.items.length].id + 1;
    //     const newP = {
    //         id : this.items[this.items.length-1].id + 1,
    //         name : details.name,
    //         role: details.role,
    //         goallabel: details.goallabel,
    //         goal: details.goal
    //     } as Item;
    //     this.items.push(newP);
    this.data.emit(details);
    }
}
