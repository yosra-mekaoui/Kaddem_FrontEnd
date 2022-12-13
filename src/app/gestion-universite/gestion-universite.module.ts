import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUniversiteRoutingModule } from './gestion-universite-routing.module';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';
import { StatComponent } from './stat/stat.component';
/***************************ANGULAR MATERIEL ADDED*************************** */
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

/*************************** END MATERIAL ADDED*************************** */
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
    MatGridListModule ,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class GestionUniversiteModule { }
