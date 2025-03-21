import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Character } from '../../models/Character';
import { ApiResponse } from '../../models/ApiResponse';
import { CharacterService } from '../../../core/services/rick_and_morty/character.service';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let characterService: CharacterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
      providers: [        
        provideHttpClient(), 
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    characterService = TestBed.inject(CharacterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call CharacterService and emit search results', () => {
    const mockCharacters: Character[] = [
      { id: '1', name: 'Rick', status: 'Alive', location: { name: 'Earth' }, image: '', episode: [], origin: { name: '' }, gender: '', species: '' },
      { id: '2', name: 'Morty', status: 'Alive', location: { name: 'Earth' }, image: '', episode: [], origin: { name: '' }, gender: '', species: '' }
    ];
    
    const mockApiResponse: ApiResponse = { info: { count: 2, pages: 1, next: '', prev: '' }, results: mockCharacters };
  
    spyOn(characterService, 'getBySearch').and.returnValue(of(mockApiResponse));
    spyOn(component.searchResults, 'emit');
  
    component.findBySearch();
  
    expect(characterService.getBySearch).toHaveBeenCalledWith(component.search.search, component.type);
    expect(component.searchResults.emit).toHaveBeenCalledWith(mockCharacters);
  });

  it('should emit search results when API call is successful', () => {
    const mockCharacters: Character[] = [
      { id: '1', name: 'Rick', status: 'Alive', location: { name: 'Earth' }, image: '', episode: [], origin: { name: '' }, gender: '', species: '' }
    ];
  
    const mockApiResponse: ApiResponse = { info: { count: 1, pages: 1, next: '', prev: '' }, results: mockCharacters };
  
    spyOn(characterService, 'getBySearch').and.returnValue(of(mockApiResponse));
    spyOn(component.searchResults, 'emit');
  
    component.findBySearch();
  
    expect(component.searchResults.emit).toHaveBeenCalledWith(mockCharacters);
  });

  it('should emit search results when API call is successful', () => {
    const mockCharacters: Character[] = [
      { id: '1', name: 'Rick', status: 'Alive', location: { name: 'Earth' }, image: '', episode: [], origin: { name: '' }, gender: '', species: '' }
    ];
  
    const mockApiResponse: ApiResponse = { info: { count: 1, pages: 1, next: '', prev: '' }, results: mockCharacters };
  
    spyOn(characterService, 'getBySearch').and.returnValue(of(mockApiResponse));
    spyOn(component.searchResults, 'emit');
  
    component.findBySearch();
  
    expect(component.searchResults.emit).toHaveBeenCalledWith(mockCharacters);
  });

  
  
  
});
