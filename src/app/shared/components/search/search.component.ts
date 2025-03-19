import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Search } from '../../models/Search';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../../../core/services/rick_and_morty/character.service';
import { TypeSearch } from '../../enums/TypeSearch';
import { Character } from '../../models/Character';
import { ApiResponse } from '../../models/ApiResponse';


@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Input() placeholder:string = '';
  @Input() type: TypeSearch = TypeSearch.NAME;
  @Output() searchResults = new EventEmitter<Character[]>();

  constructor (private service: CharacterService){}

  search = new Search();

  findBySearch(){
    this.service.getBySearch(this.search.search,this.type).subscribe({
      next:( data: ApiResponse) => {
        this.searchResults.emit(data.results);
        console.log(data)
      }, 
      error: err => {
        console.log(err)
      }
    })
  }

}
