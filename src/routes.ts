import { Routes } from "@angular/router";
import { HomeComponent } from "../src/app/home/home.component";
import { DetailsComponent } from "../src/app/details/details.component";
import { CharacterCardComponent } from "../src/app/character-card/character-card.component";


const routeConfig: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path:'details/:id',
        component: DetailsComponent,
        title:'House Page'
    },
    {
        path:'Characters',
        component: CharacterCardComponent,
        title:'Rick&Morty Characters Page'
    }
]

export default routeConfig