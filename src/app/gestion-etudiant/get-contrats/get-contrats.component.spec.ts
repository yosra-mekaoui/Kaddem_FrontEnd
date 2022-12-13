import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContratsComponent } from './get-contrats.component';

describe('GetContratsComponent', () => {
  let component: GetContratsComponent;
  let fixture: ComponentFixture<GetContratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetContratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetContratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
