import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaProductComponent } from './galeria-product.component';

describe('GaleriaProductComponent', () => {
  let component: GaleriaProductComponent;
  let fixture: ComponentFixture<GaleriaProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriaProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
