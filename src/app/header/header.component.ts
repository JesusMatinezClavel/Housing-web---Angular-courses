import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
<header class="brand-name">
  <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
</header>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
