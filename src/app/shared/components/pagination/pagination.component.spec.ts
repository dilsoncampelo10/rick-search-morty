import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { By } from '@angular/platform-browser';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Limits page test
  it('should emit page number', () => {
    component.pageChange.subscribe((page: number) => {
      expect(page).toBe(5);
    });

    component.goToPage(5);
  });

  it('should not emit if the page is less than 1', () => {
    spyOn(component.pageChange, 'emit');

    component.goToPage(0); 
    expect(component.pageChange.emit).not.toHaveBeenCalled();
  });

  it('should not emit if the page is greater than totalPages', () => {
    spyOn(component.pageChange, 'emit');

    component.goToPage(11); // Página inválida (maior que totalPages)
    expect(component.pageChange.emit).not.toHaveBeenCalled();
  });

  // Test buttons paginate
  it('should disable "Anterior" button on first page', () => {
    component.currentPage = 1;
    fixture.detectChanges();

    const prevButton = fixture.debugElement.query(By.css('.btn-previous')).nativeElement;
    expect(prevButton.disabled).toBeTruthy();
  });

  it('should disable "Próxima" button on last page', () => {
    component.currentPage = component.totalPages;
    fixture.detectChanges();

    const nextButton = fixture.debugElement.query(By.css('.btn-next')).nativeElement;
    expect(nextButton.disabled).toBeTruthy();
  });

  it('should go to next page when "Próxima" is clicked', fakeAsync(() => {
    spyOn(component, 'goToPage');
    
    component.currentPage = 1;
    component.totalPages = 5;
    fixture.detectChanges();
    
    const nextButton = fixture.debugElement.query(By.css('.btn-next')).nativeElement;
    nextButton.click();
    
    tick();
    fixture.detectChanges();

    expect(component.goToPage).toHaveBeenCalledWith(2);
  }));


  it('should go to previous page when "Anterior" is clicked', () => {
    component.currentPage = 2;
    fixture.detectChanges();

    spyOn(component, 'goToPage');
    const prevButton = fixture.debugElement.query(By.css('.btn-previous')).nativeElement;

    prevButton.click();
    fixture.detectChanges();

    expect(component.goToPage).toHaveBeenCalledWith(component.currentPage - 1);
  });

});
