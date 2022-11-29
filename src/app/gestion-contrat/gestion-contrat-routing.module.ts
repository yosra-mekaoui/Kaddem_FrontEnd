import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContratComponent } from './list-contrat/list-contrat.component';

const routes: Routes = [
  {path: '',component:ListContratComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionContratRoutingModule { }
