import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUniversiteComponent } from './list-universite/list-universite.component';

const routes: Routes = [
  {path: '', component:ListUniversiteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUniversiteRoutingModule { }
