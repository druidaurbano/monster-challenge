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

  getCharacters(page?: number): Observable<any[]> {
    if(!page)
      page = 1;
    console.log('getting characters');
    return this.http.get<any[]>(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }

  getLocations(page?: number): Observable<any[]> {
    if(!page)
      page = 1;
    console.log('getting locations');
    return this.http.get<any[]>(`https://rickandmortyapi.com/api/location/?page=${page}`);
  }
  getEpisodes(page?: number): Observable<any[]> {
    if(!page)
      page = 1;
    console.log('getting episodes');
    return this.http.get<any[]>(`https://rickandmortyapi.com/api/episode/?page=${page}`);
  }

}
