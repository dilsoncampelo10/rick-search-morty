import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../../core/services/rick_and_morty/character.service';
import { CardComponent } from '../card/card.component';
import { SearchComponent } from '../search/search.component';
import { TypeSearch } from '../../enums/TypeSearch';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-character',
  imports: [CommonModule,CardComponent,SearchComponent,PaginationComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit{
  constructor (private service: CharacterService){}
   public characteres: Character[] = [];
   public TypeSearch = TypeSearch;
   public currentPage: number = 1;
   public totalPages: number = 1;

   ngOnInit(): void {
      this.getAll(this.currentPage);
  }
   
  getAll(page: number): void {
    this.service.getAll(page).subscribe({
      next: data => {
        this.characteres = data.results;
        this.totalPages = data.info.pages;
        this.currentPage = page;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  updateCharacters(results: Character[]) {
    this.characteres = results; 
  }

  onPageChange(page: number): void {
    this.getAll(page);
  }

}
