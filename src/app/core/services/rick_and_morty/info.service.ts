import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { TypeInfo } from '../../../shared/enums/TypeInfo';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) {}

   private readonly url: string = environment.api;

   getTotal(type: TypeInfo): Observable<number> {
    return this.http.get<{ info: { count: number } }>(`${this.url}/${type}`).pipe(
      map(response => response.info.count),
      catchError(() => of(0))
    );
  }
}
