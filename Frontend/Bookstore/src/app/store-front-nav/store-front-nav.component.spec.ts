import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontNavComponent } from './store-front-nav.component';

describe('StoreFrontNavComponent', () => {
  let component: StoreFrontNavComponent;
  let fixture: ComponentFixture<StoreFrontNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreFrontNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreFrontNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
