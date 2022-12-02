import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepartComponent } from './update-depart.component';

describe('UpdateDepartComponent', () => {
  let component: UpdateDepartComponent;
  let fixture: ComponentFixture<UpdateDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
