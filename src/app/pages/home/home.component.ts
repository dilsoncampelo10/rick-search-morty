import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CharacterComponent } from '../../shared/components/character/character.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,NavbarComponent,CharacterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
