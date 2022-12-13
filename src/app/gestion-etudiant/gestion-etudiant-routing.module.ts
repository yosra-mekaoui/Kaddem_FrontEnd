import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';

const routes: Routes = [
  { path: '', component: ListEtudiantsComponent },
  { path: 'add', component: AddEtudiantComponent },
  { path: 'edit/:id' , component:EditEtudiantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEtudiantRoutingModule { }
