import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IskratelComponent } from './iskratel.component';

describe('IskratelComponent', () => {
  let component: IskratelComponent;
  let fixture: ComponentFixture<IskratelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IskratelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IskratelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
