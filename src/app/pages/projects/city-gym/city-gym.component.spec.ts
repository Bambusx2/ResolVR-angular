import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityGymComponent } from './city-gym.component';

describe('CityGymComponent', () => {
  let component: CityGymComponent;
  let fixture: ComponentFixture<CityGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityGymComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
