import { Component } from '@angular/core';
import { Search } from '../../models/Search';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../../../core/services/rick_and_morty/character.service';


@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
   constructor (private service: CharacterService){}
  search = new Search();

  findBySearch(){
    this.service.getBySearch(this.search.search).subscribe({
      next: data => {
        console.log(data)
      }, 
      error: err => {
        console.log(err)
      }
    })
  }

}
