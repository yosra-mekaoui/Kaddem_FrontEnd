import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';

const routes: Routes = [
  {path: '', component:ListUniversiteComponent},
  {path: 'add', component:AddUniversiteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUniversiteRoutingModule { }
