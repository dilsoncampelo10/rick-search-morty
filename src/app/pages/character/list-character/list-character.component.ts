import { Component } from '@angular/core';
import { NavbarComponent } from '../../../core/layouts/navbar/navbar.component';
import { HeaderComponent } from '../../../core/layouts/header/header.component';
import { CharacterComponent } from '../../../shared/components/character/character.component';
import { FooterComponent } from '../../../core/layouts/footer/footer.component';

@Component({
  selector: 'app-list-character',
  imports: [HeaderComponent,NavbarComponent,CharacterComponent, FooterComponent],
  templateUrl: './list-character.component.html',
  styleUrl: './list-character.component.scss'
})
export class ListCharacterComponent {

}
