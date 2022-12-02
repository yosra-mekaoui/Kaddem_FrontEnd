import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GestionDepartementRoutingModule } from './gestion-departement-routing.module';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AddDepartComponent } from './add-depart/add-depart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDepartComponent } from './update-depart/update-depart.component';

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
    ReactiveFormsModule
  ],
  exports: [
    ListDepartementComponent
  ]
})
export class GestionDepartementModule { }
