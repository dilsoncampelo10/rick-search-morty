import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../../core/services/rick_and_morty/character.service';
import { CardComponent } from '../card/card.component';
import { SearchComponent } from '../search/search.component';
import { TypeSearch } from '../../enums/TypeSearch';
import { ApiResponse } from '../../models/ApiResponse';

@Component({
  selector: 'app-character',
  imports: [CommonModule,CardComponent,SearchComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit{
  constructor (private service: CharacterService){}
   public characteres: Character[] = [];
   public TypeSearch = TypeSearch;

   ngOnInit(): void {
      this.getAll();
  }
   
   getAll(){
      this.service.getAll().subscribe({
        next: (data: ApiResponse) => {
          this.characteres = data.results;
       
        },
        error: err => {
          console.log(err)
        }
      })
   }


   // update in search characters
  updateCharacters(results: Character[]) {
    this.characteres = results; 
  }
}
