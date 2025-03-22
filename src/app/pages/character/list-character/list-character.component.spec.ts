import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCharacterComponent } from './list-character.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ListCharacterComponent', () => {
  let component: ListCharacterComponent;
  let fixture: ComponentFixture<ListCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [        
        provideHttpClient(), 
        provideHttpClientTesting(),
      ],
      imports: [ListCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
