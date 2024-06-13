import { Component } from '@angular/core';

import { HeaderComponent } from "../app/header/header.component";
import { HomeComponent } from "../app/home/home.component";

import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <app-header></app-header>
    <router-outlet></router-outlet>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
