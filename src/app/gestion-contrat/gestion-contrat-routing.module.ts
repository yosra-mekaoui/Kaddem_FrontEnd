import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import {AddcontratComponent} from "./addcontrat/addcontrat.component";
import {UpdatecontratComponent} from "./updatecontrat/updatecontrat.component";

const routes: Routes = [
  {path: 'listContrat',component:ListContratComponent},
  {path: 'addContrat',component:AddcontratComponent},
  {path: 'updateContrat/:idContrat',component:UpdatecontratComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionContratRoutingModule { }
