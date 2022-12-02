import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
{
  path:'listDepar',
  loadChildren:() =>import('./gestion-departement/gestion-departement.module').then(m=>m.GestionDepartementModule)
},
{
  path:'listUniv',
  loadChildren:() =>import('./gestion-universite/gestion-universite.module').then(e=>e.GestionUniversiteModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
