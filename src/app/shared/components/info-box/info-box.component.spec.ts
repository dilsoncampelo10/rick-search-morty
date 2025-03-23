import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoxComponent } from './info-box.component';

describe('InfoBoxComponent', () => {
  let component: InfoBoxComponent;
  let fixture: ComponentFixture<InfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title correctly', () => {
    component.title = 'Total de personagens';
    fixture.detectChanges();
    const cardHeader = fixture.nativeElement.querySelector('.card-header');
    expect(cardHeader.textContent).toContain('Total de personagens');
  });

  it('should display the total correctly', () => {
    component.total = '100';
    fixture.detectChanges();
    const totalValue = fixture.nativeElement.querySelector('.card-title');
    expect(totalValue.textContent.trim()).toBe('100');
  });


});
