import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ListExperienceComponent } from './list-experience/list-experience.component';
import { AddExperienceComponent } from './add-experience/add-experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListExperienceComponent,
    AddExperienceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExperienceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListExperienceComponent,
    AddExperienceComponent
  ]
})
export class ExperienceModule { }
