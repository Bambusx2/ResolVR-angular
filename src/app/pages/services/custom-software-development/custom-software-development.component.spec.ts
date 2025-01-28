import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSoftwareDevelopmentComponent } from './custom-software-development.component';

describe('CustomSoftwareDevelopmentComponent', () => {
  let component: CustomSoftwareDevelopmentComponent;
  let fixture: ComponentFixture<CustomSoftwareDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSoftwareDevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
