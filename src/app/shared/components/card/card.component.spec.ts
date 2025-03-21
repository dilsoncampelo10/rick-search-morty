import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display character name and status', () => {
    component.character = {
      id: '1',
      name: 'Rick Sanchez',
      status: 'Alive',
      location: { name: 'Earth' },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: []
    };

    fixture.detectChanges();

    const nameElement = fixture.debugElement.query(By.css('.card-name')).nativeElement;
    const statusElement = fixture.debugElement.query(By.css('.card-status')).nativeElement;

    expect(nameElement.textContent).toContain('Rick Sanchez');
    expect(statusElement.textContent).toContain('Alive');
  });

  it('should open modal when clicked', () => {
    spyOn(component, 'openModal');

    component.character = {
      id: '1',
      name: 'Rick Sanchez',
      status: 'Alive',
      location: { name: 'Earth' },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: []
    };

    fixture.detectChanges();

    const cardButton = fixture.debugElement.query(By.css('.modal-btn')).nativeElement;
    cardButton.click();

    expect(component.openModal).toHaveBeenCalledWith(component.character);
  });


});
