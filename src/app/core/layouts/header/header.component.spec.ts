import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    component.title = 'Descubra o melhor de Rick And Morty Show';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Descubra o melhor de Rick And Morty Show');
  });

  it('should set background image style', () => {
    const testImageUrl = 'https://images7.alphacoders.com/133/1335145.jpg';
    component.image = testImageUrl;
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector('header') as HTMLElement;
    expect(headerElement.style.backgroundImage).toContain(`url("${testImageUrl}")`);
  });
});
