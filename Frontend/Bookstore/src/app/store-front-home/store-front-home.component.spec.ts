import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontHomeComponent } from './store-front-home.component';

describe('StoreFrontHomeComponent', () => {
  let component: StoreFrontHomeComponent;
  let fixture: ComponentFixture<StoreFrontHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreFrontHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreFrontHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
