import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { RouterModule } from '@angular/router';
import { GestionEtudiantRoutingModule } from './gestion-etudiant-routing.module';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { GetContratsComponent } from './get-contrats/get-contrats.component';
import { GetEquipesComponent } from './get-equipes/get-equipes.component'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { StatComponent } from './stat/stat.component';
@NgModule({
  declarations: [
    ListEtudiantsComponent,
    AddEtudiantComponent,
    EditEtudiantComponent,
    GetContratsComponent,
    GetEquipesComponent,
    StatComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    GestionEtudiantRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  exports: [
    ListEtudiantsComponent
  ]
})
export class GestionEtudiantModule { }
