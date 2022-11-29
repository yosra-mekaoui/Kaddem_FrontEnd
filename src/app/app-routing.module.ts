import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path: 'etudiant',
    loadChildren:()=>import('./gestion-etudiant/gestion-etudiant.module').then(m=>m.GestionEtudiantModule)
  },

  {
    path: 'contrat',
    loadChildren: () => import('./gestion-contrat/gestion-contrat.module').then(m => m.GestionContratModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
