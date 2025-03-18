import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Character } from '../../models/Character';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @ViewChild('modal') modal!: ElementRef;
  character: Character = {
    id: '',
    name: '',
    status: '',
    location: { name: '' },
    image: '',
    episode: [],
    origin: { name: '' },
    gender: '',
    species: ''
  };
  

  openModal(character: Character) {
    this.character = character
    if (this.modal) {
      this.modal.nativeElement.classList.add('show');
      this.modal.nativeElement.classList.remove('hide');
      this.modal.nativeElement.style.display = 'block';
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.nativeElement.classList.add('hide');
      this.modal.nativeElement.classList.remove('show');
      this.modal.nativeElement.style.display = 'none'; 
    }
  }
}
