import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { RouterModule } from '@angular/router';
import { GestionEtudiantRoutingModule } from './gestion-etudiant-routing.module';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';

@NgModule({
  declarations: [
    ListEtudiantsComponent,
    AddEtudiantComponent,
    EditEtudiantComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GestionEtudiantRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ListEtudiantsComponent
  ]
})
export class GestionEtudiantModule { }
