import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAugmentationComponent } from './team-augmentation.component';

describe('TeamAugmentationComponent', () => {
  let component: TeamAugmentationComponent;
  let fixture: ComponentFixture<TeamAugmentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamAugmentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamAugmentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
