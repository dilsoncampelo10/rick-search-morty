import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CharacterService } from '../../../core/services/rick_and_morty/character.service';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let mockCharacterService: jasmine.SpyObj<CharacterService>;

  beforeEach(async () => {
    mockCharacterService = jasmine.createSpyObj('CharacterService', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [CharacterComponent],
      providers: [       
      
        provideHttpClient(), 
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAll on ngOnInit', () => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
  
    spyOn(component, 'getAll'); 
  
    fixture.detectChanges();
  
    expect(component.getAll).toHaveBeenCalledWith(component.currentPage);
  });
  

  it('should update character list when updateCharacters is called', () => {
    const newCharacters = [
      { id: '2', name: 'Morty Smith', status: 'Alive', location: { name: 'Earth' }, image: '', episode: [] }
    ];

    component.updateCharacters(newCharacters);
    fixture.detectChanges();

    expect(component.characteres.length).toBe(1);
    expect(component.characteres[0].name).toBe('Morty Smith');
  });

  it('should call getAll with the correct page when onPageChange is called', () => {
    spyOn(component, 'getAll');

    component.onPageChange(3);

    expect(component.getAll).toHaveBeenCalledWith(3);
  });
});
