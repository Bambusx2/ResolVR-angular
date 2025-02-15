import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgdMineralComponent } from './ugd-mineral.component';

describe('UgdMineralComponent', () => {
  let component: UgdMineralComponent;
  let fixture: ComponentFixture<UgdMineralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UgdMineralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgdMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
