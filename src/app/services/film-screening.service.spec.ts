import { TestBed } from '@angular/core/testing';

import { FilmScreeningService } from './film-screening.service';

describe('FilmScreeningService', () => {
  let service: FilmScreeningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmScreeningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
