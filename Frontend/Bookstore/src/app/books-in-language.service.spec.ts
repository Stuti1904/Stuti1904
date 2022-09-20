import { TestBed } from '@angular/core/testing';

import { BooksInLanguageService } from './books-in-language.service';

describe('BooksInLanguageService', () => {
  let service: BooksInLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksInLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
