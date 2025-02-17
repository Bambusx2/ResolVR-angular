import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoSchoolComponent } from './piano-school.component';

describe('PianoSchoolComponent', () => {
  let component: PianoSchoolComponent;
  let fixture: ComponentFixture<PianoSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianoSchoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianoSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
