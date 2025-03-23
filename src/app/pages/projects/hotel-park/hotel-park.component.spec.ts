import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelParkComponent } from './hotel-park.component';

describe('HotelParkComponent', () => {
  let component: HotelParkComponent;
  let fixture: ComponentFixture<HotelParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelParkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
