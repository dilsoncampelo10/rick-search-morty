import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { StatusCharacter } from '../../enums/StatusCharacter';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal and set character correctly', () => {
    const character = { 
      id: '1', 
      name: 'Rick Sanchez', 
      status: StatusCharacter.ALIVE, 
      location: { name: 'Earth' },
      image: '', 
      episode: [], 
      origin: { name: 'Earth' },
      gender: 'Male', 
      species: 'Human' 
    };

    component.openModal(character);

    const modalElement = component.modal.nativeElement;
    expect(modalElement.classList.contains('show')).toBeTrue();
    expect(modalElement.classList.contains('hide')).toBeFalse();
    expect(modalElement.style.display).toBe('block');

    expect(component.character).toEqual(character);
  });

  it('should close the modal', () => {
    component.closeModal();

    const modalElement = component.modal.nativeElement;
    expect(modalElement.classList.contains('hide')).toBeTrue();
    expect(modalElement.classList.contains('show')).toBeFalse();
    expect(modalElement.style.display).toBe('none');
  });
});
