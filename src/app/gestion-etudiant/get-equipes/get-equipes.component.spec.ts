import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEquipesComponent } from './get-equipes.component';

describe('GetEquipesComponent', () => {
  let component: GetEquipesComponent;
  let fixture: ComponentFixture<GetEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEquipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
