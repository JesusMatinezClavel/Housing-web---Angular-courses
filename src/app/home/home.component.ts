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
  <div class="app-home">
    <div  class='home-Input'>
      <form>
      <input class="input-Text" type="text" placeholder="Filter by name" #filter>
        <button class="input-Button" type="button" (click)="filteredResults(filter.value)">Search</button>
      </form>
</div>
    <div class="home-Body">
    <ng-container *ngIf="!rmCharactersList || rmCharactersList.length === 0">
  <img src="../../assets/evil-morty.png" alt="">
</ng-container>
<ng-container *ngIf="rmCharactersList && rmCharactersList.length > 0">
  <app-character-card *ngFor="let rmCharacter of filteredCharacterList"
                      [rmCharacter]="rmCharacter">
  </app-character-card>
</ng-container>
      <!-- <app-housing-location 
      *ngFor="let housingLocation of housingLocationList" 
      [housingLocation]="housingLocation">   
      </app-housing-location> -->
</div>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)

  rmCharactersList: Character[] = []
  rmCharactersService: RMCharactersService = inject(RMCharactersService)

  filteredCharacterList: Character[] = []

  constructor() {

    this.housingLocationList = this.housingService.getAllHousingLocations()
    if (this.rmCharactersList.length === 0) {
      this.loadRmCharacters()
    }

    setTimeout(() => {
      this.filteredCharacterList = this.rmCharactersList
    }, 100);
  }

  filteredResults(text: string) {
    if (!text) this.filteredCharacterList = this.rmCharactersList

    this.filteredCharacterList = this.rmCharactersList.filter(
      character => character?.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    )
  }

  async loadRmCharacters() {
    try {
      this.rmCharactersList = await this.rmCharactersService.getAllCharacters()
    } catch (error) {
      console.log(error);
    }
  }
}
