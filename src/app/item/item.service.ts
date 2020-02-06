import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", goallabel:"Goal Score:",goal:0,type:"Player"},
        { id: 2, name: "Phil Young", role: "Goalkeeper", goallabel:"Goal Score:",goal:0,type:"Player"},
        { id: 3, name: "Piqué", role: "Defender",goallabel:"Goal Score:", goal:0,type:"Player"},
        { id: 4, name: "I. Rakitic", role: "Midfielder",goallabel:"Goal Score:", goal:0,type:"Player"},
        { id: 5, name: "Sergio", role: "Midfielder" , goallabel:"Goal Score:",goal:0,type:"Player"},
        { id: 6, name: "Denis Suárez", role: "Midfielder" , goallabel:"Goal Score:",goal:0,type:"Player"},
        { id: 7, name: "Arda", role: "Midfielder",goallabel:"Goal Score:", goal:0 ,type:"Player"},
        { id: 8, name: "A. Iniesta", role: "Midfielder" , goallabel:"Goal Score:",goal:0,type:"Player"},
        { id: 9, name: "Suárez", role: "Forward" , goallabel:"Goal Score:",goal:0,type:"Player"},
        { id: 10, name: "Messi", role: "Forward", goallabel:"Goal Score:",goal:0,type:"Player"},
        { id: 11, name: "Neymar", role: "Forward", goallabel:"Goal Score:",goal:0 ,type:"Player"},
        { id: 12, name: "Rafinha", role: "Midfielder",goallabel:"Goal Score:", goal:0,type:"Player"},
        { id: 1, name: "Cillessen", role: "Goalkeeper", goallabel:"Goal Score:",goal:0,type:"Artist"},
        { id: 2, name: "Mascherano A", role: "Defender" , goallabel:"Goal Score:",goal:0,type:"Artist"},
        { id: 3, name: "Mascherano B", role: "Defender" , goallabel:"Goal Score:",goal:0,type:"Artist"},
        { id: 4, name: "Mascherano C", role: "Defender" , goallabel:"Goal Score:",goal:0,type:"Artist"},
        { id: 5, name: "Paco Alcácer", role: "Forward", goallabel:"Goal Score:",goal:0,type:"Artist"},
        { id: 5, name: "Jordi Alba", role: "Defender",goallabel:"Goal Score:", goal:0,type:"Artist"},
        { id: 6, name: "Digne", role: "Defender" , goallabel:"Goal Score:",goal:0,type:"Artist"},
        { id: 7, name: "Sergi Roberto", role: "Midfielder",goallabel:"Goal Score:", goal:0,type:"Artist"},
        { id: 8, name: "André Gomes", role: "Midfielder" , goallabel:"Goal Score:",goal:0,type:"Artist"},
        { id: 9, name: "Aleix Vidal", role: "Midfielder" , goallabel:"Goal Score:",goal:0,type:"Artist"},
        { id: 10, name: "Umtiti", role: "Defender", goallabel:"Goal Score:",goal:0,type:"Artist"},
        { id: 11, name: "Mathieu", role: "Defender" , goallabel:"Goal Score:",goal:0,type:"Artist"},
        { id: 12, name: "Masip", role: "Goalkeeper" , goallabel:"Goal Score:",goal:0,type:"Artist"}
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
    getPlayers():Array<Item>{
        return this.items.filter((item)=> item.type === "Player");
    }
    getArtists():Array<Item>{
        return this.items.filter((item)=> item.type === "Artist");
    }
    getLength(){
        return this.items.length;
    }
    addItem(data : Item){
        this.items.push(data)
    }
}
