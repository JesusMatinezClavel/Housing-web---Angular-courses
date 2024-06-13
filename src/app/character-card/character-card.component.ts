import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Character, RmCharacter } from "../interfaces/rm-character";

import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<section class="listing">
  <img class="listing-photo" [src]="rmCharacter.image" alt="Exterior photo of {{rmCharacter.name}}">
  <h2 class="listing-heading">{{rmCharacter.name}}</h2>
  <p class="listing-location">{{rmCharacter.species}}</p>
  <a [routerLink]="['/details', rmCharacter.id]">Learn more</a>
</section>
  `,
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  @Input() rmCharacter!: Character
}
