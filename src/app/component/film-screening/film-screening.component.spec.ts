import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmScreeningComponent } from './film-screening.component';

describe('FilmScreeningComponent', () => {
  let component: FilmScreeningComponent;
  let fixture: ComponentFixture<FilmScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmScreeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
