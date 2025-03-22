import { Component } from '@angular/core';
import { CharacterComponent } from '../../../shared/components/character/character.component';
import { HeaderComponent } from '../../../core/layouts/header/header.component';

@Component({
  selector: 'app-list-character',
  imports: [CharacterComponent,HeaderComponent],
  templateUrl: './list-character.component.html',
  styleUrl: './list-character.component.scss'
})
export class ListCharacterComponent {

}
