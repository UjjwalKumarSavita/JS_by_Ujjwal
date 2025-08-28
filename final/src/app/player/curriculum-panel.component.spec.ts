import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumPanelComponent } from './curriculum-panel.component';

describe('CurriculumPanelComponent', () => {
  let component: CurriculumPanelComponent;
  let fixture: ComponentFixture<CurriculumPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurriculumPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
