import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportExperienceComponent } from './export-experience.component';

describe('ExportExperienceComponent', () => {
  let component: ExportExperienceComponent;
  let fixture: ComponentFixture<ExportExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
