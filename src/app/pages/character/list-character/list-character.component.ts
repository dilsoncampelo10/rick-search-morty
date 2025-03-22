import { Component } from '@angular/core';
import { CharacterComponent } from '../../../shared/components/character/character.component';

@Component({
  selector: 'app-list-character',
  imports: [CharacterComponent],
  templateUrl: './list-character.component.html',
  styleUrl: './list-character.component.scss'
})
export class ListCharacterComponent {

}
