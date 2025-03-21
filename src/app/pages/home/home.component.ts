import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/layouts/header/header.component';
import { NavbarComponent } from '../../core/layouts/navbar/navbar.component';
import { CharacterComponent } from '../../shared/components/character/character.component';
import { FooterComponent } from '../../core/layouts/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,NavbarComponent,CharacterComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
