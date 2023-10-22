import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { ApiService } from 'src/app/services/api.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit {
  charactersList: Array<Character> = [];

  constructor(
    private api: ApiService,
    private database: DatabaseService
  ) {

  }

  ngOnInit() {
    this.getCharacters();
    this.getLocations();
    this.getEpisodes();
  }

  getCharacters() {
    this.api.getCharacters().subscribe((data: any) => {
      console.log('show me the data characters', data);
      for(let item of data.results) {
        let character: Character = {
          id: item.id,
          name: item.name,
          thumbnail: item.image
        };
        this.database.addToCharactersList(character);
      }
      console.log('database:', this.database.charactersArray);
      this.charactersList = this.database.charactersArray;
    });
  }

  getLocations() {
    this.api.getLocations().subscribe((data: any) => {
      console.log('show me the data locations', data);
    });
  }

  getEpisodes() {
    this.api.getEpisodes().subscribe((data: any) => {
      console.log('show me the data episodes', data);
    });
  }

}
