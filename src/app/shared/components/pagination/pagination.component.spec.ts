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

    component.goToPage(11); 
    expect(component.pageChange.emit).not.toHaveBeenCalled();
  });

  // Test buttons paginate
  it('should disable prev button on first page', () => {
    component.currentPage = 1;
    fixture.detectChanges();

    const prevButton = fixture.debugElement.query(By.css('.btn-previous')).nativeElement;
    expect(prevButton.disabled).toBeTruthy();
  });

  it('should disable next button on last page', () => {
    component.currentPage = component.totalPages;

    const nextButton = fixture.debugElement.query(By.css('.btn-next')).nativeElement;
    expect(nextButton.disabled).toBeTruthy();
  });

  it('should go to next page when next is clicked', fakeAsync(() => {
    spyOn(component, 'goToPage');
    
    component.currentPage = 1;
    component.totalPages = 5;
    fixture.detectChanges();
    
    const nextButton = fixture.debugElement.query(By.css('.btn-next')).nativeElement;
    nextButton.click();
    
    tick();

    expect(component.goToPage).toHaveBeenCalledWith(2);
  }));


  it('should go to previous page when prev is clicked', () => {
    component.currentPage = 2;
    fixture.detectChanges();

    spyOn(component, 'goToPage');
    const prevButton = fixture.debugElement.query(By.css('.btn-previous')).nativeElement;

    prevButton.click();

    expect(component.goToPage).toHaveBeenCalledWith(component.currentPage - 1);
  });

  it('should render the correct number of options in the select', () => {
    component.totalPages = 5;
    fixture.detectChanges();
  
    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    const options = select.querySelectorAll('option');
  
    expect(options.length).toBe(5);
    expect(options[0].textContent.trim()).toBe('1');
    expect(options[4].textContent.trim()).toBe('5');
  });

  it('should call onPageChange when a new page is selected', () => {
    spyOn(component, 'onPageChange');
  
    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    select.value = '3'; 
    select.dispatchEvent(new Event('change'));
  
    expect(component.onPageChange).toHaveBeenCalled();
  });
  
});
