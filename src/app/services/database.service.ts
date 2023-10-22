import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  charactersArray: Array<any> = [];
  locationsArray: Array<any> = [];
  episodesArray: Array<any> = [];

  constructor() { }

  addToCharactersList(character: any) {
    this.charactersArray.push(character);
  }

  resetCharactersList() {
    this.charactersArray = [];
  }

  addToLocationsList(location: any) {
    this.locationsArray.push(location);
  }

  resetLocationsList() {
    this.locationsArray = [];
  }
  addToEpisodesList(episode: any) {
    this.episodesArray.push(episode);
  }

  resetEpisodesList() {
    this.charactersArray = [];
  }
}
