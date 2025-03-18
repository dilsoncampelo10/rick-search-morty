import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../../shared/models/Character';
import { environment } from '../../../config/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyServiceService {

  constructor(private request: HttpClient) { }

  private url: string = environment.api;

  getAll(): Observable<Character[]>{
    return this.request.get<Character[]>(`${this.url}/character`);
  }
}
