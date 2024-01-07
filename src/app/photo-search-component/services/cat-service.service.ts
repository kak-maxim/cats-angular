import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Breed,CatPhoto } from '../../interface/cat-interface';


@Injectable({
  providedIn: 'root'
})
export class CatService {

  private baseUrl = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.baseUrl}/breeds`);
  }

  getPhotos(limit: number, breedId?: string): Observable<CatPhoto[]> {
    let params = new HttpParams().set('limit', limit.toString());
    if (breedId) {
      params = params.set('breed_id', breedId);
    }
    return this.http.get<CatPhoto[]>(`${this.baseUrl}/images/search`, { params });
  }

}