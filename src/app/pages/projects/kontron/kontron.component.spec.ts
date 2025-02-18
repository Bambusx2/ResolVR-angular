import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontronComponent } from './kontron.component';

describe('KontronComponent', () => {
  let component: KontronComponent;
  let fixture: ComponentFixture<KontronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KontronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
