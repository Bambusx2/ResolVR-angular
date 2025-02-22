import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimaTermComponent } from './rima-term.component';

describe('RimaTermComponent', () => {
  let component: RimaTermComponent;
  let fixture: ComponentFixture<RimaTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RimaTermComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RimaTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
