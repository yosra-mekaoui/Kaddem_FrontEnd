import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { RouterModule } from '@angular/router';
import { GestionEtudiantRoutingModule } from './gestion-etudiant-routing.module';



@NgModule({
  declarations: [
    ListEtudiantsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GestionEtudiantRoutingModule
  ],
  exports: [
    ListEtudiantsComponent
  ]
})
export class GestionEtudiantModule { }
