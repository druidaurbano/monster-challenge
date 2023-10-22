import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<any[]> {
    console.log('getting characters');
    return this.http.get<any[]>(`https://rickandmortyapi.com/api/character/`);
  }

  getLocations(): Observable<any[]> {
    console.log('getting locations');
    return this.http.get<any[]>(`https://rickandmortyapi.com/api/location/`);
  }
  getEpisodes(): Observable<any[]> {
    console.log('getting episodes');
    return this.http.get<any[]>(`https://rickandmortyapi.com/api/episode/`);
  }

}
