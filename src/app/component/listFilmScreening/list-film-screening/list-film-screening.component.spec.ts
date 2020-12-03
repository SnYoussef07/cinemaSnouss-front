import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmScreeningComponent } from './list-film-screening.component';

describe('ListFilmScreeningComponent', () => {
  let component: ListFilmScreeningComponent;
  let fixture: ComponentFixture<ListFilmScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilmScreeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilmScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
