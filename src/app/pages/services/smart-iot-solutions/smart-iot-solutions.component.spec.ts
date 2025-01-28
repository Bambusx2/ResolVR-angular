import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartIotSolutionsComponent } from './smart-iot-solutions.component';

describe('SmartIotSolutionsComponent', () => {
  let component: SmartIotSolutionsComponent;
  let fixture: ComponentFixture<SmartIotSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartIotSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartIotSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
