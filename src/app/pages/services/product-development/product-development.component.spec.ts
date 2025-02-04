import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDevelopmentComponent } from './product-development.component';

describe('CustomSoftwareDevelopmentComponent', () => {
  let component: ProductDevelopmentComponent;
  let fixture: ComponentFixture<ProductDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
