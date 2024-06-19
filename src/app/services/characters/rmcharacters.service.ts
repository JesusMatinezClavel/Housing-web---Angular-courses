import { Injectable } from '@angular/core';
import { Character, RmCharacter } from "../../interfaces/rm-character";

@Injectable({
  providedIn: 'root'
})
export class RMCharactersService {

  url = 'https://rickandmortyapi.com/api/'

  constructor() { }

  async getAllCharacters(): Promise<Character[]> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json'
      },
    }
    const response = await fetch(`${this.url}/character`, options)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    return data.results ?? []
  }

  async getCharacterById(id: number): Promise<Character> {
    const response = await fetch(`${this.url}/character/${id}`)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    console.log(data);


    return data ?? undefined
  }

  async getCharacterByName(name: string): Promise<Character[]> {
    const response = await fetch(`${this.url}/character/?name=${name}`)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    return data ?? undefined
  }
}
