import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<header class="brand-name">
  <a routerLink="">
  <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
  </a>
</header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
