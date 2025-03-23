import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent {
  @Input() color: string = '';
  @Input() title: string = '';
  @Input() total: string = '0';
}
