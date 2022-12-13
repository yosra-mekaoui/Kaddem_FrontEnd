import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DetailsEquipeComponent } from './details-equipe/details-equipe.component';



import{ListEquipeComponent} from "./list-equipe/list-equipe.component"


const routes: Routes = [
  {path:"listequipe",component: ListEquipeComponent},
  {path:"listequipe/detailsequipe/:id",component: DetailsEquipeComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
