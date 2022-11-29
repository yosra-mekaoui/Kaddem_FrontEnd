import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListEtudiantsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListEtudiantsComponent
  ]
})
export class GestionEtudiantModule { }
