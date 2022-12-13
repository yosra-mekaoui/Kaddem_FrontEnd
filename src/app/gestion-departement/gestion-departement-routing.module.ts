import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartComponent } from './add-depart/add-depart.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { UpdateDepartComponent } from './update-depart/update-depart.component';

const routes: Routes = [
  {path: '', component:ListDepartementComponent},
  {path: 'add', component:AddDepartComponent},
  {path: 'update/:idDepart', component:UpdateDepartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDepartementRoutingModule { }
