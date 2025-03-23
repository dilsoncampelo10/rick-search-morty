import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/layouts/header/header.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { InfoService } from '../../core/services/rick_and_morty/info.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private infoService: InfoService) {}

  totalCharacters$!: Observable<number>;
  totalEpisodes$!: Observable<number>;
  totalLocations$!: Observable<number>;

  ngOnInit(): void {
    this.totalCharacters$ = this.infoService.getTotal('character');
    this.totalEpisodes$ = this.infoService.getTotal('episode');
    this.totalLocations$ = this.infoService.getTotal('location');
  }
  
}
