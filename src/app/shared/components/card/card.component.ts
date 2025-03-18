import { Component, Input, ViewChild } from '@angular/core';
import { Character } from '../../models/Character';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [ModalComponent,FormsModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() character!: Character;
  @ViewChild(ModalComponent) modal!: ModalComponent;
  selectedCharacterIndex:string = '';

  openModal(character:Character) {

    this.modal.openModal(character);
}
  
}
