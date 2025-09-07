import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherCarouselComponent } from './voucher-carousel.component';

describe('VoucherCarouselComponent', () => {
  let component: VoucherCarouselComponent;
  let fixture: ComponentFixture<VoucherCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoucherCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
