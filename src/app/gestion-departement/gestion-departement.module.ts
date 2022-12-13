import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GestionDepartementRoutingModule } from './gestion-departement-routing.module';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AddDepartComponent } from './add-depart/add-depart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDepartComponent } from './update-depart/update-depart.component';
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
    ListDepartementComponent,
    AddDepartComponent,
    UpdateDepartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GestionDepartementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [
    ListDepartementComponent
  ]
})
export class GestionDepartementModule { }
