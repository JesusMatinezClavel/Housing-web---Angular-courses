import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      character-card works!
    </p>
  `,
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {

}
