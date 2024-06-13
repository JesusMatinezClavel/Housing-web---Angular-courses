import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousingLocationComponent } from "../housing-location/housing-location.component";

import { HousingLocation } from "../interfaces/housing-location";
import { RmCharacter } from "../interfaces/rm-character";

import { HousingService } from "../services/housing/housing.service";
import { RMCharactersService } from '../services/characters/rmcharacters.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section  class='content'>
      <form>
        <input type='text' placeholder="Filter by city"/>
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
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

  rmCharactersList: RmCharacter[] = []
  rmCharactersService: RMCharactersService = inject(RMCharactersService)

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
    this.loadRmCharacters()    
  }

  async loadRmCharacters() {
    try {
      this.rmCharactersList = await this.rmCharactersService.getAllCharacters()
    } catch (error) {
      console.log(error);
    }
  }
}
