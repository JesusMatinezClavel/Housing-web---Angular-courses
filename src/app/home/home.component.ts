import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { CharacterCardComponent } from "../character-card/character-card.component";

import { HousingLocation } from "../interfaces/housing-location";
import { Character, RmCharacter } from "../interfaces/rm-character";

import { HousingService } from "../services/housing/housing.service";
import { RMCharactersService } from '../services/characters/rmcharacters.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, CharacterCardComponent],
  template: `
    <section  class='content'>
      <form>
        <input type='text' placeholder="Filter by city"/>
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
    <ng-container *ngIf="!rmCharactersList || rmCharactersList.length === 0">
  <p>Loading characters...</p>
</ng-container>
<ng-container *ngIf="rmCharactersList && rmCharactersList.length > 0">
  <app-character-card *ngFor="let rmCharacter of rmCharactersList"
                      [rmCharacter]="rmCharacter">
  </app-character-card>
</ng-container>
      <app-housing-location 
      *ngFor="let housingLocation of housingLocationList" 
      [housingLocation]="housingLocation">   
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)

  rmCharactersList: Character[] = []
  rmCharactersService: RMCharactersService = inject(RMCharactersService)

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
    setTimeout(() => {
      this.loadRmCharacters()
      console.log('damelo todo' + this.rmCharactersList);

    }, 3000);
  }

  async loadRmCharacters() {
    try {
      this.rmCharactersList = await this.rmCharactersService.getAllCharacters()
    } catch (error) {
      console.log(error);
    }
  }
}
