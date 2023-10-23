import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
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
  filterList: Array<any> = [];

  constructor(
    private api: ApiService,
    private database: DatabaseService
  ) {
    this.filterList = [
      {id: 0, name: 'Characters'},
      {id: 1, name: 'Locations'},
      {id: 2, name: 'Episodes'},
    ];
  }

  ngOnInit() {
    this.getCharacters();
    this.getLocations();
    this.getEpisodes();
  }

  ngAfterViewInit() {
    this.selectFilter('0');
  }

  selectFilter(id: any) {
    document.getElementById(`${id}-fb`)?.classList.add('selected');
  }

  unselectFilter() {
    document.getElementById('selected')?.classList.remove();
  }

  changeFilter(item: any) {
    console.log('filtro selecionado', item);
  }

  getCharacters(page?: number) {
    this.api.getCharacters(page).subscribe((data: any) => {
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

  onIonInfinite(e: any) {
    console.log('get more episodes', this.charactersList.length/20 + 1);
    this.getCharacters(this.charactersList.length/20 + 1);
    setTimeout(() => {
      (e as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
