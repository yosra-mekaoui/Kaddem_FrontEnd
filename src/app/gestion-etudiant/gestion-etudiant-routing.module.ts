import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';

const routes: Routes = [
  {path: 'listContrat', component:ListEtudiantsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEtudiantRoutingModule { }
