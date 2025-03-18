import { Component, Input } from '@angular/core';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() character!: Character;
  
}
