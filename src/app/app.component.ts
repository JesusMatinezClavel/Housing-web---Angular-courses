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
  <section class='content'>
    <router-outlet>   
    </router-outlet>
  </section>
  </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
