import { Component } from '@angular/core';

import { HomeComponent } from "../app/home/home.component";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <section class='content'>
    <app-home></app-home>
  </section>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
