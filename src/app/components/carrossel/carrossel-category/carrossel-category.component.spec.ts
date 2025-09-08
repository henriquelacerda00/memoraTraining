import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselCategoryComponent } from './carrossel-category.component';

describe('CarrosselCategoryComponent', () => {
  let component: CarrosselCategoryComponent;
  let fixture: ComponentFixture<CarrosselCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosselCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
