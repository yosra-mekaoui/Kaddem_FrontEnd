import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExperienceComponent } from './dialog-experience.component';

describe('DialogExperienceComponent', () => {
  let component: DialogExperienceComponent;
  let fixture: ComponentFixture<DialogExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
