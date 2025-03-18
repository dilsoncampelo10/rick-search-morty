import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/Character';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../../core/services/rick_and_morty/character.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-character',
  imports: [CommonModule,CardComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit{
  constructor (private service: CharacterService){}
   public characteres: Character[] = [];

   ngOnInit(): void {
      this.getAll();
  }
   
   getAll(){
      this.service.getAll().subscribe({
        next: data => {
          this.characteres = data.results;
       
        },
        error: err => {
          console.log(err)
        }
      })
   }
}
