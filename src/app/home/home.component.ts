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
    <div  class='home-Input'>
      <form>
        <input class="input-Text" type='text' placeholder="Filter by name"/>
        <button class="input-Button" type="button">Search</button>
      </form>
</div>
    <section class="home-Body">
    <ng-container *ngIf="!rmCharactersList || rmCharactersList.length === 0">
  <p><img src="../../assets/Rick&MortyTitle.png" alt=""></p>
</ng-container>
<ng-container *ngIf="rmCharactersList && rmCharactersList.length > 0">
  <app-character-card *ngFor="let rmCharacter of rmCharactersList"
                      [rmCharacter]="rmCharacter">
  </app-character-card>
</ng-container>
      <!-- <app-housing-location 
      *ngFor="let housingLocation of housingLocationList" 
      [housingLocation]="housingLocation">   
      </app-housing-location> -->
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
