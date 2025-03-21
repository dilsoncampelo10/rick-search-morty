import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule,FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
  onPageChange(event: Event) {
    this.currentPage = Number((event.target as HTMLSelectElement).value);
    this.pageChange.emit(this.currentPage);
  }
  
}
