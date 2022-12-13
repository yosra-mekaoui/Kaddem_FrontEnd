import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUniversiteRoutingModule } from './gestion-universite-routing.module';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';
import { StatComponent } from './stat/stat.component';
@NgModule({
  declarations: [
    ListUniversiteComponent,
    AddUniversiteComponent,
    UpdateUniversiteComponent,
    StatComponent
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
