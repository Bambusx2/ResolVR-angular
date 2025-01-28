import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImprovementComponent } from './product-improvement.component';

describe('ProductImprovementComponent', () => {
  let component: ProductImprovementComponent;
  let fixture: ComponentFixture<ProductImprovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImprovementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
