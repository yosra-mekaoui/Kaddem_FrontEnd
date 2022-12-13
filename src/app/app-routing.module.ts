import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {AppComponent} from "./app.component";



const routes: Routes = [
  
  {path: 'equipe', loadChildren: () => import('./equipe/equipe.module').then(e =>e.EquipeModule )},
  {path:'experience',  loadChildren:() =>import('./experience/experience.module').then(m=>m.ExperienceModule)},
  


  {path:'', component:HomeComponent},
  {
    path: 'etudiant',
    loadChildren:()=>import('./gestion-etudiant/gestion-etudiant.module').then(m=>m.GestionEtudiantModule)
  },

  {
    path: 'contrat',
    loadChildren: () => import('./gestion-contrat/gestion-contrat.module').then(m => m.GestionContratModule)
  },


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
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
