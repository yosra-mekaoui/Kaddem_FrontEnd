import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExperienceComponent } from './list-experience.component';

describe('ListExperienceComponent', () => {
  let component: ListExperienceComponent;
  let fixture: ComponentFixture<ListExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
