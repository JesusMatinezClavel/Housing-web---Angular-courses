import { Routes } from "@angular/router";
import { HomeComponent } from "../src/app/home/home.component";
import { DetailsComponent } from "../src/app/details/details.component";


const routeConfig: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path:'details',
        component: DetailsComponent,
        title:'House Page'
    }
]

export default routeConfig