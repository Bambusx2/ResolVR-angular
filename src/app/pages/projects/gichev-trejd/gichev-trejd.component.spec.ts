import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GichevTrejdComponent } from './gichev-trejd.component';

describe('GichevTrejdComponent', () => {
  let component: GichevTrejdComponent;
  let fixture: ComponentFixture<GichevTrejdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GichevTrejdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GichevTrejdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
