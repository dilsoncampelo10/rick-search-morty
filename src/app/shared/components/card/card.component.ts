import { Component, Input, ViewChild } from '@angular/core';
import { Character } from '../../models/Character';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StatusCharacter } from '../../enums/StatusCharacter';

@Component({
  selector: 'app-card',
  imports: [ModalComponent,FormsModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() character: Character = {
    id: '',
    name: '',
    status: StatusCharacter.ALIVE,
    location: { name: '' },
    image: '',
    episode: []
  };
  
  @ViewChild(ModalComponent) modal!: ModalComponent;
  selectedCharacterIndex:string = '';

  openModal(character:Character) {

    this.modal.openModal(character);
}

getStatusClass(status: StatusCharacter): string {
  return {
    [StatusCharacter.ALIVE.toLocaleLowerCase()]: 'alive',
    [StatusCharacter.DEAD.toLocaleLowerCase()]: 'dead',
    [StatusCharacter.UNKNOWN.toLocaleLowerCase()]: 'unknown'
  }[status.toLowerCase()] || '';
}

  
}
