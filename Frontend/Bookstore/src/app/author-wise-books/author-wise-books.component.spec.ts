import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorWiseBooksComponent } from './author-wise-books.component';

describe('AuthorWiseBooksComponent', () => {
  let component: AuthorWiseBooksComponent;
  let fixture: ComponentFixture<AuthorWiseBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorWiseBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorWiseBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
