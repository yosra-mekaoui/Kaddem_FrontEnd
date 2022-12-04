import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUniversiteRoutingModule } from './gestion-universite-routing.module';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ListUniversiteComponent,
    AddUniversiteComponent
  ],
  imports: [
    CommonModule,
    GestionUniversiteRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatGridListModule 
  ]
})
export class GestionUniversiteModule { }
