import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiResponse } from '../../../shared/models/ApiResponse';
import { environment } from '../../../../environments/environment.development';
import { TypeSearch } from '../../../shared/enums/TypeSearch';
import { StatusCharacter } from '../../../shared/enums/StatusCharacter';

describe('CharacterService', () => {
  let service: CharacterService;
  let  httpMock: HttpTestingController;
  let base_url = environment.api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [        
        provideHttpClient(), 
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get for all characters (getAll)', () => {
    const mockResponse: ApiResponse = {
      info: { count: 826, pages: 42, next: '', prev: '' },
      results: [{ id: '1', name: 'Rick Sanchez', status: StatusCharacter.ALIVE, location: { name: 'Earth' }, image: '', episode: [] }]
    };

    service.getAll(1).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${base_url}/character?page=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); 
  });

  it('should search for characters by name (getBySearch)', () => {
    const mockResponse: ApiResponse = {
      info: { count: 1, pages: 1, next: '', prev: '' },
      results: [{ id: '1', name: 'Morty Smith', status: StatusCharacter.ALIVE, location: { name: 'Earth' }, image: '', episode: [] }]
    };

    service.getBySearch('Morty', TypeSearch.NAME).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${base_url}/character?name=Morty`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should search for characters by status (getBySearch)', () => {
    const mockResponse: ApiResponse = {
      info: { count: 3, pages: 1, next: '', prev: '' },
      results: [
        { id: '1', name: 'Rick Sanchez', status: StatusCharacter.ALIVE, location: { name: 'Earth' }, image: '', episode: [] },
        { id: '2', name: 'Morty Smith', status: StatusCharacter.ALIVE, location: { name: 'Earth' }, image: '', episode: [] }
      ]
    };
  
    service.getBySearch(StatusCharacter.ALIVE, TypeSearch.STATUS).subscribe((response) => {
      expect(response).toEqual(mockResponse);
      expect(response.results.length).toBe(2);
      expect(response.results[0].status).toBe('Alive'); 
    });
  
    const req = httpMock.expectOne(`${base_url}/character?status=Alive`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
});
