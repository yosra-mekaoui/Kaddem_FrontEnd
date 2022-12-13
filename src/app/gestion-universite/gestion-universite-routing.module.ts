import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { StatComponent } from './stat/stat.component';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';

const routes: Routes = [
  {path: '', component:ListUniversiteComponent},
  {path: 'add', component:AddUniversiteComponent},
  {path: 'update/:idUniv', component:UpdateUniversiteComponent},
  {path: 'stat',component:StatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUniversiteRoutingModule { }
