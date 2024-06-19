import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../services/housing/housing.service";
import { HousingLocation } from "../interfaces/housing-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

import { RMCharactersService } from "../services/characters/rmcharacters.service";
import { Character } from "../interfaces/rm-character";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- <article> -->
    <!-- <img class="listing-photo" [src]="housingLocation?.photo" alt="Housing Photo">
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
  <h2 class="section-heading">About this housing location</h2>
  <ul>
    <li>Units available: {{housingLocation?.availableUnits}}</li>
    <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
    <li>Does this locations have laundry: {{housingLocation?.laundry}}</li>
  </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName='firstName'/>
        <label for="last-name">First Name</label>
        <input id="last-name" type="text" formControlName='lastName'/>
        <label for="email">First Name</label>
        <input id="email" type="email" formControlName='email'/>
        <button class="primary" type="submit">Apply Now</button>
      </form>
    </section> -->
    <!-- </article> -->
    <div class="app-details">
      <div class="details-design" *ngIf="rmCharacter === undefined">
        <img src="../../evil-morty.png" alt="Loading morty" />
      </div>
      <div class="details-design" *ngIf="rmCharacter !== undefined">
        <div class="details-card">
          <div class="details-info">
            <table class="info-table">
              <div class="cell">
                <tr>
                  <th>Name</th>
                  <div class="separator"></div>
                  <td>{{ rmCharacter.name }}</td>
                </tr>
              </div>
              <div class="cell">
                <tr>
                  <th>Status</th>
                  <div class="separator"></div>
                  <td>{{ rmCharacter.status }}</td>
                </tr>
              </div>
              <div class="cell">
                <tr>
                  <th>Gender</th>
                  <div class="separator"></div>
                  <td>{{ rmCharacter.gender }}</td>
                </tr>
              </div>
              <div class="cell">
                <tr>
                  <th>Especie</th>
                  <div class="separator"></div>
                  <td>{{ rmCharacter.species }}</td>
                </tr>
              </div>
              <div class="cell">
                <tr>
                  <th>Location</th>
                  <div class="separator"></div>
                  <td>
                    {{ rmCharacter.location.name }}
                  </td>
                </tr>
              </div>
              <div class="cell">
                <tr>
                  <th>Episodes</th>
                  <div class="separator"></div>
                  <td>Appeared in {{ rmCharacter.episode.length }} episodes</td>
                </tr>
              </div>
            </table>
          </div>
          <div class="details-photo">
            <img
              class="listing-photo"
              [src]="rmCharacter.image"
              alt="photo of {{ rmCharacter.name }}"
            />
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  rmCharacterService = inject(RMCharactersService);
  rmCharacter: Character | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? "",
      this.applyForm.value.lastName ?? "",
      this.applyForm.value.email ?? ""
    );
  }

  constructor() {
    const housingLocationsId = Number(this.route.snapshot.params["id"]);
    this.housingLocation =
      this.housingService.getHousingLocationsById(housingLocationsId);
    if (this.rmCharacter === undefined) {
      this.loadCharacter();
    }
  }

  async loadCharacter() {
    try {
      const rmCharacterId = Number(this.route.snapshot.params["id"]);

      return (this.rmCharacter = await this.rmCharacterService.getCharacterById(
        rmCharacterId
      ));
    } catch (error) {
      return error;
    }
  }
}
