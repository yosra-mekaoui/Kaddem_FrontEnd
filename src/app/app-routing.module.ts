import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {
    path:'listExperience',
    loadChildren:() =>import('./experience/experience.module').then(m=>m.ExperienceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
