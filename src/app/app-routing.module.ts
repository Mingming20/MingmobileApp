import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
// import { MingGridComponent } from "~/app/ming-grid/ming-grid.component";
import { FourthActivityComponent } from "~/app/fourth-activity/fourth-activity.component";
import { ArtistComponent } from "~/app/artist/artist.component";
import { SoccerComponent } from "~/app/soccer/soccer.component";
import {DraggableComponent } from "~/app/draggable/draggable.component";
import {AppComponent} from "~/app/app.component";

const routes: Routes = [
    // { path: "", redirectTo: "/ming", pathMatch: "full" },
    // {path: "ming",component:MingGridComponent},
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: AppComponent },
    { path: "artist", component: ArtistComponent },
    { path: "soccer", component: SoccerComponent },
    {path: "drag", component: DraggableComponent},
    { path: "item-details", component: ItemDetailComponent },
    { path: "item/:id", component: ItemDetailComponent },
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
