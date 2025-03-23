import { TestBed } from '@angular/core/testing';

import { InfoService } from './info.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

describe('InfoService', () => {
  let service: InfoService;
  let httpMock: HttpTestingController;
  let base_url = environment.api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [        
        provideHttpClient(), 
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(InfoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch total count of characters', () => {
    const mockResponse = { info: { count: 826 } };

    service.getTotal('character').subscribe((count) => {
      expect(count).toBe(826);
    });

    const req = httpMock.expectOne(`${base_url}/character`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should return 0 on error', () => {
    service.getTotal('character').subscribe((count) => {
      expect(count).toBe(0);
    });

    const req = httpMock.expectOne('https://rickandmortyapi.com/api/character');
    req.error(new ErrorEvent('Network error')); // Simula erro na requisição
  });
});
