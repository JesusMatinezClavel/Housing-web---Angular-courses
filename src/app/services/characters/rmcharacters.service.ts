import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RMCharactersService {

  url = 'https://rickandmortyapi.com/api/'

  constructor() { }

  getAllCharacters() {
    return this.url
  }
}
