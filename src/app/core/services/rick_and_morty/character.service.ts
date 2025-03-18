import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Character } from '../../../shared/models/Character';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private request: HttpClient) { }

  private url: string = environment.api;

  getAll(): Observable<ApiResponse>{
    return this.request.get<ApiResponse>(`${this.url}/character`);
  }
  getBySearch(search: string): Observable<ApiResponse>{
    const params = new HttpParams().set('name', search);
    return this.request.get<ApiResponse>(`${this.url}/character`,{params})
  }
}
