import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ListEquipeComponent} from "./list-equipe/list-equipe.component"


const routes: Routes = [
  {path:"listequipe",component: ListEquipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
